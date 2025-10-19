import { motion } from 'motion/react';
import { Heart, Sparkles, Flower2, Gift } from 'lucide-react';
import { HeartFloat } from './HeartFloat';
import { MessageCard } from './MessageCard';
// import { ImageWithFallback } from './figma/ImageWithFallback';

export function CelebrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      <HeartFloat />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block mb-6"
          >
            <Flower2 className="w-20 h-20 text-pink-500 mx-auto" />
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chúc Mừng Mẹ
          </motion.h1>
          
          <motion.div
            className="text-3xl md:text-4xl text-pink-600 mb-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Sparkles className="w-8 h-8" />
            <span>20/10</span>
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ngày Phụ Nữ Việt Nam - Gửi đến mẹ yêu những lời chúc tốt đẹp nhất!
          </motion.p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/*<ImageWithFallback*/}
            {/*  src="https://images.unsplash.com/photo-1723056881872-db252d3d8135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc2MDYyMTcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
            {/*  alt="Hoa hồng"*/}
            {/*  className="w-full h-80 object-cover"*/}
            {/*/>*/}
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/*<ImageWithFallback*/}
            {/*  src="https://images.unsplash.com/photo-1608561463612-37b5e683728d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBkYXVnaHRlciUyMGxvdmV8ZW58MXx8fHwxNzYwNjIxNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
            {/*  alt="Mẹ và con"*/}
            {/*  className="w-full h-80 object-cover"*/}
            {/*/>*/}
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            {/*<ImageWithFallback*/}
            {/*  src="https://images.unsplash.com/photo-1676470931979-45e293a5a262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBmbG93ZXJzJTIwYm91cXVldHxlbnwxfHx8fDE3NjA2MjE3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"*/}
            {/*  alt="Bó hoa tươi"*/}
            {/*  className="w-full h-80 object-cover"*/}
            {/*/>*/}
          </motion.div>
        </motion.div>

        {/* Message Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <MessageCard
            icon={<Heart className="w-16 h-16" />}
            title="Tình Yêu Vô Bờ"
            message="Con yêu mẹ nhiều lắm! Cảm ơn mẹ đã luôn bên cạnh, chăm sóc và yêu thương con trong suốt những năm tháng qua."
            delay={1}
          />
          
          <MessageCard
            icon={<Sparkles className="w-16 h-16" />}
            title="Luôn Rạng Rỡ"
            message="Chúc mẹ luôn tràn đầy năng lượng, sức khỏe dồi dào và nụ cười tươi như hoa. Mẹ là nguồn cảm hứng của con."
            delay={1.2}
          />
          
          <MessageCard
            icon={<Flower2 className="w-16 h-16" />}
            title="Mãi Xinh Đẹp"
            message="Mẹ mãi là người phụ nữ đẹp nhất trong trái tim con. Tuổi tác chỉ làm mẹ càng thêm quyến rũ và duyên dáng."
            delay={1.4}
          />
          
          <MessageCard
            icon={<Gift className="w-16 h-16" />}
            title="Hạnh Phúc Viên Mãn"
            message="Chúc mẹ luôn gặp nhiều may mắn, niềm vui và thành công trong cuộc sống. Mẹ xứng đáng có được điều tốt đẹp nhất!"
            delay={1.6}
          />
          
          <MessageCard
            icon={<Heart className="w-16 h-16 fill-pink-500" />}
            title="Tri Ân Sâu Sắc"
            message="Con biết ơn mẹ vì tất cả những hy sinh thầm lặng. Mẹ là người hùng của con, người con kính trọng nhất."
            delay={1.8}
          />
          
          <MessageCard
            icon={<Sparkles className="w-16 h-16 fill-pink-500" />}
            title="Mãi Yêu Thương"
            message="Dù thời gian có trôi đi, tình yêu của con dành cho mẹ sẽ mãi mãi không thay đổi. Mẹ là tất cả của con!"
            delay={2}
          />
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl border-2 border-pink-200">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              💐
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-pink-600 mb-6">
              Chúc Mừng Ngày 20/10
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Gửi đến mẹ - người phụ nữ tuyệt vời nhất trên đời!
              <br />
              Con yêu mẹ vô cùng! ❤️
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 opacity-30 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Flower2 className="w-32 h-32 text-pink-300" />
        </motion.div>
      </div>
      
      <div className="fixed bottom-10 right-10 opacity-30 pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <Flower2 className="w-40 h-40 text-rose-300" />
        </motion.div>
      </div>
    </div>
  );
}
