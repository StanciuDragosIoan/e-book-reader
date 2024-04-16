if (voiceLoaded()) {
    speak();
  } else {
    speechSynthesis.addEventListener('voiceschanged', speak);
  }
  
  function speak() {
    const utterance = new SpeechSynthesisUtterance('Crafting Interpreters contains everything you need to implement a full-featured, efficient scripting language. You\'ll learn both high-level concepts around parsing and semantics and gritty details like bytecode representation and garbage collection. Your brain will light up with new ideas, and your hands will get dirty and calloused. It\'s a blast.');
    utterance.voice = getFemaleVoice();

    //pitch
    // utterance.pitch = 2;

    //rate 
    // utterance.rate = 1.2;
    //may cause issue
    window.speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  setTimeout(() => {
const t = speechSynthesis.getVoices();
console.log(t)
  }, 500)
  
  function getFemaleVoice() {
    const voiceIndex = 5;
    return speechSynthesis.getVoices()[voiceIndex];
  }
  
  function voiceLoaded() {
    return speechSynthesis.getVoices().length;
  }