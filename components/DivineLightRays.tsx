"use client";

// Divine light rays — responsive: fewer, narrower rays on small screens
export default function DivineLightRays() {
    const rays = [
        { angle: -40, delay: "0s", opacity: 0.15, width: "3px", widthMd: "4px", height: "80%" },
        { angle: -25, delay: "0.4s", opacity: 0.20, width: "4px", widthMd: "6px", height: "85%" },
        { angle: -10, delay: "0.8s", opacity: 0.25, width: "6px", widthMd: "8px", height: "90%" },
        { angle: 0, delay: "0s", opacity: 0.30, width: "7px", widthMd: "10px", height: "100%" },
        { angle: 10, delay: "0.6s", opacity: 0.25, width: "6px", widthMd: "8px", height: "90%" },
        { angle: 25, delay: "0.2s", opacity: 0.20, width: "4px", widthMd: "6px", height: "85%" },
        { angle: 40, delay: "1.0s", opacity: 0.15, width: "3px", widthMd: "4px", height: "80%" },
        // outer rays — desktop only via opacity 0 on smallest screens
        { angle: -55, delay: "1.2s", opacity: 0.08, width: "2px", widthMd: "3px", height: "65%" },
        { angle: 55, delay: "0.9s", opacity: 0.08, width: "2px", widthMd: "3px", height: "65%" },
    ];

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            <div className="divine-rays-origin">
                {rays.map((ray, i) => (
                    <div
                        key={i}
                        className="divine-ray"
                        style={{
                            transform: `rotate(${ray.angle}deg)`,
                            opacity: ray.opacity,
                            // Use widthMd on >=md, width on <md — approximated via clamp
                            width: `clamp(${ray.width}, 1vw, ${ray.widthMd})`,
                            height: ray.height,
                            animationDelay: ray.delay,
                        }}
                    />
                ))}
            </div>
            <div className="divine-burst" />
        </div>
    );
}
