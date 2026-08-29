import React, { useEffect, useRef } from 'react';

interface ECGWaveformViewerProps {
  heartRate?: number;
  rhythmTitle?: string;
  className?: string;
}

export const ECGWaveformViewer: React.FC<ECGWaveformViewerProps> = ({
  heartRate = 72,
  rhythmTitle = 'Normal Sinus Rhythm (NSR)',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawWaveform = () => {
      drawGrid();
      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      ctx.strokeStyle = '#10b981'; // Medical neon green
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const t = (x + offset) % 200;
        let y = midY;

        // P Wave
        if (t > 20 && t < 40) {
          y -= Math.sin(((t - 20) / 20) * Math.PI) * 8;
        }
        // Q Wave
        else if (t >= 45 && t < 50) {
          y += 6;
        }
        // R Wave (Spike)
        else if (t >= 50 && t < 60) {
          y -= 45;
        }
        // S Wave
        else if (t >= 60 && t < 68) {
          y += 12;
        }
        // T Wave
        else if (t >= 90 && t < 130) {
          y -= Math.sin(((t - 90) / 40) * Math.PI) * 14;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      offset = (offset + 2) % 10000;
      animationFrameId = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [heartRate]);

  return (
    <div className={`p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-slate-200">Lead II Real-time Telemetry</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">{rhythmTitle}</span>
          <span className="font-mono font-bold text-emerald-400">{heartRate} BPM</span>
        </div>
      </div>
      <canvas ref={canvasRef} width={600} height={120} className="w-full h-28 rounded-xl bg-slate-950" />
    </div>
  );
};
