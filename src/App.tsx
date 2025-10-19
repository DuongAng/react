import { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { CelebrationPage } from './components/CelebrationPage';

export default function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  if (!showCelebration) {
    return <StartScreen onComplete={() => setShowCelebration(true)} />;
  }

  return <CelebrationPage />;
}
