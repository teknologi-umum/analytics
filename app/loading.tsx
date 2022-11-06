export default function Loading() {
  return (
    <>
      <style jsx>{`
        .loading-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .loading {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .loading div {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: #4ba8e7;
          opacity: 0.5;
          animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .loading div:nth-child(1) {
          left: 8px;
          animation-delay: -0.24s;
        }
        .loading div:nth-child(2) {
          left: 32px;
          animation-delay: -0.12s;
        }
        .loading div:nth-child(3) {
          left: 56px;
          animation-delay: 0;
        }
        @keyframes loading {
          0% {
            top: 8px;
            height: 64px;
          }
          50%,
          100% {
            top: 24px;
            height: 32px;
          }
        }
      `}</style>
      <div className="loading-wrapper">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
