import React, { useEffect, useState } from "react";
import { Spinner, Box } from "@chakra-ui/react";

const SpeedTest: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://ws.nperf.com/partner/js?l=9a0727ac-ef4e-4ba3-a14d-048c720a600e";
      script.async = true;

      script.onload = () => {
        console.log("nPerf script loaded");

        const container = document.getElementById("speedTestContainer");
        if (container) {
          container.innerHTML = `
            <iframe id="nPerfSpeedTest" src="https://ws.nperf.com/partner/frame?l=9a0727ac-ef4e-4ba3-a14d-048c720a600e" 
            width="100%" height="600px" frameborder="0" scrolling="no" 
            style="overflow: hidden; display: block; margin: 0px; padding: 0px; max-width: 800px;" 
            allow="geolocation" referrerpolicy="unsafe-url"></iframe>
          `;
        }

        window.addEventListener("message", messageHandler, false);
      };

      script.onerror = () => {
        console.error("nPerf script failed to load");
      };

      document.body.appendChild(script);
    };

    const messageHandler = (event: MessageEvent) => {
      if (
        event.origin === "https://ws.nperf.com" ||
        event.origin === "https://ws-cdn.nperf.com" ||
        event.origin === "http://ws-nossl.nperf.com"
      ) {
        try {
          switch (event.data.action) {
            case "nPerfLoaded":
              nPerfLoaded();
              break;
            case "nPerfReady":
              nPerfReady();
              break;
            case "nPerfError":
              nPerfError(event.data.type);
              break;
            case "nPerfTestStarted":
              nPerfTestStarted();
              break;
            case "nPerfTestStartedOrRestarted":
              nPerfTestStartedOrRestarted(event.data.restart);
              break;
            case "nPerfTestCompleted":
              nPerfTestCompletedObj(event.data);
              nPerfTestCompleted(
                event.data.id,
                event.data.isp,
                event.data.download_avg,
                event.data.download_peak,
                event.data.upload_avg,
                event.data.upload_peak,
                event.data.latency,
                event.data.latency_avg,
                event.data.latency_jitter,
                event.data.pool_id
              );
              break;
            case "nPerfGetLastResult":
              nPerfGetLastResult(event.data.lastResult);
              break;
            case "nPerfTestShare":
              nPerfTestShare(event.data);
              break;
            case "nPerfResponsiveSwitch":
              const iframe = document.getElementById("nPerfSpeedTest");
              if (iframe) {
                if (event.data.mode === "smart") iframe.style.height = "500px";
                else iframe.style.height = "400px";
              }
              break;
            case "nPerfGetRealTimeUpdate":
              nPerfGetRealTimeUpdate(event.data);
              break;
            default:
              console.log("Unhandled nPerf event:", event.data.action);
              break;
          }
        } catch (e) {
          console.error(e);
        }
      }
    };

    const nPerfLoaded = () => {
      console.log("nPerf Loaded");
      setLoading(false);
    };

    const nPerfReady = () => {
      console.log("nPerf Ready");
      setLoading(false);
    };

    const nPerfError = (type: string) => {
      console.error("nPerf Error:", type);
      setLoading(false);
    };

    const nPerfTestStarted = () => {
      console.log("nPerf test started");
    };

    const nPerfTestStartedOrRestarted = (restart: boolean) => {
      console.log("nPerf test started or restarted:", restart);
    };

    const nPerfTestCompletedObj = (data: any) => {
      console.log("nPerf test completed with data:", data);
    };

    const nPerfTestCompleted = (
      id: string,
      isp: string,
      download_avg: number,
      download_peak: number,
      upload_avg: number,
      upload_peak: number,
      latency: number,
      latency_avg: number,
      latency_jitter: number,
      pool_id: string
    ) => {
      console.log("nPerf test completed");
      console.log("Test ID:", id);
      console.log("ISP:", isp);
      console.log("Download Average:", download_avg, "kbps");
      console.log("Download Peak:", download_peak, "kbps");
      console.log("Upload Average:", upload_avg, "kbps");
      console.log("Upload Peak:", upload_peak, "kbps");
      console.log("Latency:", latency, "ms");
      console.log("Average Latency:", latency_avg, "ms");
      console.log("Latency Jitter:", latency_jitter, "ms");
      console.log("Pool ID:", pool_id);
    };

    const nPerfGetLastResult = (lastResult: any) => {
      console.log("nPerf get last result:", lastResult);
    };

    const nPerfTestShare = (data: any) => {
      console.log("nPerf test share:", data);
    };

    const nPerfGetRealTimeUpdate = (data: any) => {
      console.log("nPerf get real time update:", data);
    };

    // Load the script after a delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      if (document.readyState === "complete") {
        loadScript();
      } else {
        window.addEventListener("load", loadScript);
      }
    });

    return () => {
      clearTimeout(timer);
      const existingScript = document.querySelector(
        'script[src="https://ws.nperf.com/partner/js?l=9a0727ac-ef4e-4ba3-a14d-048c720a600e"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
      window.removeEventListener("load", loadScript);
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <Box
      position="relative"
      width={{ base: "auto", md: 500, xl: 600 }}
      height={400}
      overflow={"hidden"}
    >
      {loading && (
        <Box height={400}>
          <Box
            height={"full"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner size="xl" />
          </Box>
        </Box>
      )}
      <div
        id="speedTestContainer"
        style={{ width: "100%", visibility: loading ? "hidden" : "visible" }}
      ></div>
    </Box>
  );
};

export default SpeedTest;
