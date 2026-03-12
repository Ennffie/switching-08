import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export interface QuizOption {
  emoji: string;
  text: string;
  description: string;
}

export interface SliderQuizData {
  question: string;
  options: QuizOption[];
  nextRoute: string;
  progress?: number;
}

interface SliderQuizPageProps {
  quizData: SliderQuizData;
}

const SliderQuizPage = ({ quizData }: SliderQuizPageProps) => {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { question, options, nextRoute, progress = 50 } = quizData;

  // 根據 slider 值計算選中的索引
  useEffect(() => {
    const index = Math.min(
      Math.floor((sliderValue / 100) * options.length),
      options.length - 1
    );
    setSelectedIndex(index);
  }, [sliderValue, options.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderFromPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderFromPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderFromPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderFromPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderFromPosition = (clientX: number) => {
    if (!trackRef.current) return;
    
    const rect = trackRef.current.getBoundingClientRect();
    const thumbWidth = 80;
    const availableWidth = rect.width - thumbWidth;
    const relativeX = clientX - rect.left - thumbWidth / 2;
    
    let percentage = (relativeX / availableWidth) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    
    setSliderValue(percentage);
  };

  // 計算按鈕位置
  const thumbPosition = `calc(${sliderValue}% - ${sliderValue * 0.8}px)`;

  return (
    <div 
      className="page-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <div className="quiz-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="header-placeholder"></div>
      </div>

      {/* Question */}
      <div className="quiz-content">
        <h1 className="quiz-question">{question}</h1>

        {/* Selected Option Display */}
        <div className="selected-option-container">
          <div className="selected-option-card">
            <div className="selected-emoji">{options[selectedIndex].emoji}</div>
            <div className="selected-text">{options[selectedIndex].text}</div>
            <div className="selected-description">{options[selectedIndex].description}</div>
          </div>
        </div>

        {/* Slider Track */}
        <div className="slider-section">
          <div 
            ref={trackRef}
            className="slider-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            {/* Track Background */}
            <div className="slider-track">
              <div 
                className="slider-track-fill"
                style={{ width: `${sliderValue}%` }}
              ></div>
            </div>

            {/* Option Labels below track */}
            <div className="slider-labels">
              {options.map((_option, index) => (
                <div 
                  key={index}
                  className={`slider-label ${selectedIndex === index ? 'active' : ''}`}
                >
                  {index === 0 && 'I'}
                  {index === 1 && 'II'}
                  {index === 2 && 'III'}
                  {index === 3 && 'IV'}
                </div>
              ))}
            </div>

            {/* Thumb Button */}
            <div 
              ref={sliderRef}
              className={`slider-thumb ${isDragging ? 'dragging' : ''}`}
              style={{ left: thumbPosition }}
              onTouchStart={handleTouchStart}
              onMouseDown={handleMouseDown}
            >
              <span className="slider-thumb-text">郁我</span>
            </div>
          </div>

          {/* Hint Text */}
          <p className="slider-hint">
            👆 拖動控制器選擇你的風格
          </p>
        </div>

        {/* All Options Preview */}
        <div className="options-preview">
          {options.map((_option, index) => (
            <div 
              key={index}
              className={`option-dot ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => setSliderValue((index / (options.length - 1)) * 100)}
            >
              <span className="dot-emoji">{options[index].emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="quiz-footer">
        <button 
          className="quiz-submit-btn"
          onClick={() => navigate(nextRoute)}
        >
          決定了！🎯
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .page-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #E67E22 0%, #c0392b 100%);
          display: flex;
          flex-direction: column;
        }

        .quiz-header {
          display: flex;
          align-items: center;
          padding: 16px;
          gap: 16px;
        }

        .back-button {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: white;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .header-placeholder {
          width: 40px;
        }

        .quiz-content {
          flex: 1;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .quiz-question {
          font-size: 28px;
          font-weight: 700;
          color: white;
          text-align: center;
          line-height: 1.4;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .selected-option-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 160px;
        }

        .selected-option-card {
          background: white;
          border-radius: 20px;
          padding: 32px 40px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          min-width: 200px;
        }

        .selected-emoji {
          font-size: 72px;
          line-height: 1;
          margin-bottom: 16px;
        }

        .selected-text {
          font-size: 24px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .selected-description {
          font-size: 16px;
          color: #7f8c8d;
        }

        .slider-section {
          padding: 8px 16px 0;
        }

        .slider-track-container {
          position: relative;
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          padding: 0 40px;
        }

        .slider-track {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }

        .slider-track-fill {
          height: 100%;
          background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%);
          border-radius: 6px;
          transition: width 0.1s ease;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          padding: 0 4px;
        }

        .slider-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .slider-label.active {
          color: white;
          transform: scale(1.2);
        }

        .slider-thumb {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          cursor: grab;
          user-select: none;
          transition: transform 0.1s ease, box-shadow 0.2s ease;
          z-index: 10;
        }

        .slider-thumb.dragging {
          cursor: grabbing;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 24px rgba(0,0,0,0.4);
        }

        .slider-thumb-text {
          font-size: 16px;
          font-weight: 700;
          color: #E67E22;
        }

        .slider-hint {
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          margin-top: 2px;
          margin-bottom: 0;
        }

        .options-preview {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 0 16px 4px;
        }

        .option-dot {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .option-dot.active {
          background: white;
          transform: scale(1.1);
          border-color: #E67E22;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .dot-emoji {
          font-size: 28px;
        }

        .quiz-footer {
          padding: 24px 20px 20px;
          margin-bottom: 220px;
        }

        .quiz-submit-btn {
          width: 100%;
          padding: 18px 24px;
          background: #E67E22;
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(230, 126, 34, 0.4);
          transition: all 0.2s ease;
        }

        .quiz-submit-btn:active {
          transform: scale(0.98);
          box-shadow: 0 2px 8px rgba(230, 126, 34, 0.3);
        }
      `}</style>
    </div>
  );
};

export default SliderQuizPage;
