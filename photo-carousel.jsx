/* Photo Carousel — auto-cycling stacked cards beside About text */

const PHOTOS = [
  {
    id: 'asu-grad',
    src: '../images/asu_grad.jpg',
    caption: 'ASU Graduation',
    sub: 'Masters in Computer Science',
  },
  {
    id: 'asu-campus',
    src: '../images/adithya-asu.jpg',
    caption: 'Arizona State University',
    sub: 'Where it all started in the US',
  },
  {
    id: 'andrew-ng',
    src: '../images/andrew_ng_adithya.jpeg',
    caption: 'With Andrew Ng',
    sub: 'DeepLearning.AI · AI Dev 26 · SF',
  },
  {
    id: 'intuit-conf',
    src: '../images/intuit-office.jpg',
    caption: 'Conference Outing',
    sub: 'Intuit team on the ground',
  },
  {
    id: 'intuit-team',
    src: '../images/intuit-team.jpg',
    caption: 'The Intuit Crew',
    sub: 'Team meetup · Fraud Prevention',
  },
];

const CYCLE_MS = 4000;

function PhotoCarousel() {
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState(1); // 1 = forward, -1 = back
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const timerRef = React.useRef(null);
  const progressRef = React.useRef(null);
  const startTimeRef = React.useRef(Date.now());
  const remainingRef = React.useRef(CYCLE_MS);

  const total = PHOTOS.length;

  const goTo = React.useCallback((idx, dir) => {
    setDirection(dir);
    setActive(idx);
    startTimeRef.current = Date.now();
    remainingRef.current = CYCLE_MS;
    setProgress(0);
  }, []);

  const next = React.useCallback(() => {
    goTo((active + 1) % total, 1);
  }, [active, total, goTo]);

  const prev = React.useCallback(() => {
    goTo((active - 1 + total) % total, -1);
  }, [active, total, goTo]);

  // auto-cycle
  React.useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      next();
    }, remainingRef.current);
    startTimeRef.current = Date.now();
    return () => clearTimeout(timerRef.current);
  }, [active, paused, next]);

  // progress bar animation
  React.useEffect(() => {
    if (paused) return;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min(elapsed / CYCLE_MS, 1));
      if (elapsed < CYCLE_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  const handlePause = () => {
    setPaused(true);
    remainingRef.current = Math.max(500, CYCLE_MS - (Date.now() - startTimeRef.current));
    clearTimeout(timerRef.current);
  };

  const handleResume = () => {
    setPaused(false);
    startTimeRef.current = Date.now();
  };

  return (
    <div
      className="photo-carousel"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* stacked image area */}
      <div className="photo-carousel__stage">
        {PHOTOS.map((photo, i) => {
          const offset = ((i - active) + total) % total;
          // only render nearby cards for performance
          const isVisible = offset <= 2 || offset >= total - 1;
          if (!isVisible) return null;

          let zIndex, opacity, scale, translateY, translateX, rotate;

          if (offset === 0) {
            // active card
            zIndex = 10;
            opacity = 1;
            scale = 1;
            translateY = 0;
            translateX = 0;
            rotate = 0;
          } else if (offset === 1) {
            // next card peeking behind
            zIndex = 9;
            opacity = 0.6;
            scale = 0.94;
            translateY = 12;
            translateX = 8;
            rotate = 2;
          } else if (offset === 2) {
            // third card
            zIndex = 8;
            opacity = 0.3;
            scale = 0.88;
            translateY = 24;
            translateX = 16;
            rotate = 4;
          } else {
            // card looping back (just exited)
            zIndex = 7;
            opacity = 0;
            scale = 1.02;
            translateY = -20;
            translateX = -30;
            rotate = -3;
          }

          return (
            <div
              key={photo.id}
              className="photo-carousel__card"
              style={{
                zIndex,
                opacity,
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
              }}
            >
              <img src={photo.src} alt={photo.caption} draggable="false" />
            </div>
          );
        })}
      </div>

      {/* caption + controls */}
      <div className="photo-carousel__footer">
        <div className="photo-carousel__caption" key={active}>
          <span className="photo-carousel__title">{PHOTOS[active].caption}</span>
          <span className="photo-carousel__sub">{PHOTOS[active].sub}</span>
        </div>

        <div className="photo-carousel__controls">
          <button className="photo-carousel__btn" onClick={prev} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="photo-carousel__counter">{active + 1} / {total}</span>
          <button className="photo-carousel__btn" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* progress dots */}
      <div className="photo-carousel__dots">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            className={`photo-carousel__dot ${i === active ? 'active' : ''}`}
            onClick={() => goTo(i, i > active ? 1 : -1)}
            aria-label={`Photo ${i + 1}`}
          >
            {i === active && (
              <div
                className="photo-carousel__dot-fill"
                style={{ transform: `scaleX(${progress})` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { PhotoCarousel });
