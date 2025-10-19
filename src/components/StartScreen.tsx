import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface StartScreenProps {
  onComplete: () => void;
}

export function StartScreen({ onComplete }: StartScreenProps) {
  const [clickCount, setClickCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const encouragementMessages = [
    "Hehe, chưa được đâu! 😏",
    "Mẹ phải cố gắng hơn nữa! 💪",
    "Ôi, suýt nữa! 😆",
    "Gần rồi, cố lên mẹ! 🎯",
    "Cuối cùng! Mẹ giỏi quá! 🎉"
  ];

  const moveButton = () => {
    const newX = Math.random() * 80 + 10; // 10-90% để tránh ra ngoài màn hình
    const newY = Math.random() * 70 + 10; // 10-80%
    setButtonPosition({ x: newX, y: newY });
  };

  const handleMouseEnter = () => {
    if (clickCount < 4) {
      setIsHovering(true);
      moveButton();
    }
  };

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setMessages([...messages, encouragementMessages[newCount - 1]]);
    
    if (newCount >= 5) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      moveButton();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-8 h-8 fill-pink-300 stroke-pink-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
            Mẹ Ơi! 💝
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Con có món quà đặc biệt cho mẹ đây!
          </p>

          <p className="text-lg text-pink-600 mb-12">
            Nhấn vào nút bên dưới để xem nhé! 
            <br />
          </p>
        </motion.div>

        {/* Messages */}
        <div className="mb-8 h-20">
          {messages.length > 0 && (
            <motion.p
              key={messages.length}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl text-pink-600"
            >
              {messages[messages.length - 1]}
            </motion.p>
          )}
        </div>

        {/* Moving button container */}
        <div className="relative h-96 w-full max-w-2xl mx-auto">
          <motion.button
            className={`absolute px-8 py-4 rounded-full text-white shadow-2xl transition-all duration-200 ${
              clickCount >= 5
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600'
            }`}
            style={{
              left: `${buttonPosition.x}%`,
              top: `${buttonPosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: clickCount >= 5 ? [1, 1.2, 1] : 1,
            }}
            transition={{
              scale: { duration: 0.5, repeat: clickCount >= 5 ? Infinity : 0 },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleClick}
            whileHover={{ scale: clickCount >= 4 ? 1.1 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {clickCount >= 5 ? (
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-white" />
                Đang mở quà...
                <Heart className="w-5 h-5 fill-white" />
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Xem Quà Của Con
                <Heart className="w-5 h-5" />
              </span>
            )}
          </motion.button>
        </div>

        {/* Progress indicator */}
        <motion.div
          className="mt-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                className={`w-4 h-4 rounded-full ${
                  clickCount >= num ? 'bg-pink-500' : 'bg-gray-300'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: clickCount >= num ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
