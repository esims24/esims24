/**
 * Mock AI Service to simulate responses from Exa.ai API
 * This allows development and testing without making actual API calls
 */

// Mock responses based on intents/keywords
const mockResponses = {
  // English responses
  en: {
    greeting: [
      "Hello! How can I help you with Nexora™ services today?",
      "Hi there! I'm your Nexora™ AI assistant. What can I do for you?",
      "Welcome to Nexora™! I'm here to help with your eSIM and digital needs."
    ],
    
    esim: [
      "To activate your eSIM, please scan the QR code we provided or manually enter the SM-DP+ address. Need any help with it?",
      "eSIM activation is easy! Just scan your QR code in your phone's settings, or I can guide you through the manual setup if needed.",
      "For your eSIM activation, you'll need to go to your phone settings, add a cellular plan, and scan the QR code. Would you like more detailed steps?"
    ],
    
    nexoraHub: [
      "Nexora™ Hub is our unified platform that lets you manage all your eSIMs in one place with an animated, AR-ready interface.",
      "With Nexora™ Hub, you can easily switch between different eSIMs, monitor usage, and access our support services.",
      "Nexora™ Hub brings all your digital connectivity needs into one elegant interface with real-time usage tracking."
    ],
    
    nexoraPay: [
      "Nexora™ Pay allows you to make payments for digital and physical goods using any card or digital wallet.",
      "Our Nexora™ Pay service integrates with all major payment methods and offers secure transactions for your peace of mind.",
      "With Nexora™ Pay, you can easily handle payments across different currencies and payment types."
    ],
    
    eco: [
      "Our Eco Mode helps reduce data consumption and battery usage while maintaining connectivity, earning you sustainability badges.",
      "Nexora™'s carbon-tracked systems help you monitor and reduce your digital carbon footprint with our Eco Mode feature.",
      "By using our Eco Mode, you're contributing to a greener future. We track the carbon saved and award sustainability badges to recognize your efforts."
    ],
    
    cloud: [
      "Nexora™ Cloud provides secure API backends using Cloudflare Workers, Supabase, and Firebase for scalable solutions.",
      "Our cloud infrastructure is designed for security and scalability, supporting all our digital services seamlessly.",
      "Nexora™ Cloud ensures your data is protected with state-of-the-art security while enabling fast, reliable access from anywhere."
    ],
    
    verify: [
      "Nexora™ Verify provides real-time eKYC with NRC OCR, facial recognition, and ID verification for secure onboarding.",
      "Our verification system makes identity validation quick and secure, with support for Myanmar NRC and international IDs.",
      "Nexora™ Verify streamlines the verification process, making compliance simple while maintaining the highest security standards."
    ],
    
    fallback: [
      "I'm designed to assist with Nexora™ eSIM and digital services only. Let me know if you need help with any of our products.",
      "I'm sorry, but I can only help with questions related to Nexora™ services. Is there anything about our eSIM or digital products you'd like to know?",
      "That's beyond my expertise. I'm here to help with Nexora™'s products and services like eSIM activation, Nexora Hub, or Nexora Pay."
    ]
  },
  
  // Burmese responses
  mm: {
    greeting: [
      "မင်္ဂလာပါ! Nexora™ ဝန်ဆောင်မှုများနှင့် ပတ်သက်၍ သင့်ကို ဘယ်လိုကူညီပေးရမလဲ?",
      "ဟိုင်း! ကျွန်တော်က သင့်ရဲ့ Nexora™ AI လက်ထောက်ပါ။ သင့်အတွက် ဘာလုပ်ပေးရမလဲ?",
      "Nexora™ မှ ကြိုဆိုပါတယ်! သင့်ရဲ့ eSIM နှင့် ဒစ်ဂျစ်တယ်လိုအပ်ချက်များကို ကူညီဖို့ ဒီမှာရှိပါတယ်။"
    ],
    
    esim: [
      "သင့် eSIM ကို အသက်သွင်းရန်၊ ကျွန်ုပ်တို့ ပေးထားသော QR ကုဒ်ကို စကင်ဖတ်ပါ သို့မဟုတ် SM-DP+ လိပ်စာကို လက်ဖြင့် ထည့်သွင်းပါ။ အကူအညီလိုပါသလား?",
      "eSIM အသက်သွင်းခြင်းသည် လွယ်ကူပါသည်! သင့်ဖုန်းရဲ့ ဆက်တင်ထဲမှာ QR ကုဒ်ကို စကင်ဖတ်ပါ၊ သို့မဟုတ် လက်ဖြင့် စနစ်တကျ ထည့်သွင်းရန် လိုအပ်ပါက ကျွန်တော် လမ်းညွှန်ပေးနိုင်ပါတယ်။",
      "သင့် eSIM အသက်သွင်းရန်၊ သင့်ဖုန်းဆက်တင်သို့သွား၍ ဆဲလ်ကူလာပလန်ကို ထည့်သွင်းပြီး QR ကုဒ်ကို စကင်ဖတ်ပါ။ အသေးစိတ်အဆင့်များ ပိုလိုချင်ပါသလား?"
    ],
    
    nexoraHub: [
      "Nexora™ Hub ကတော့ သင့်ရဲ့ eSIMs အားလုံးကို အသက်ဝင်နေသော၊ AR-အဆင်သင့်ဖြစ်သော interface ဖြင့် တစ်နေရာတည်းတွင် စီမံခန့်ခွဲနိုင်စေတဲ့ ပေါင်းစည်းထားသော platform တစ်ခုဖြစ်ပါတယ်။",
      "Nexora™ Hub ဖြင့်၊ သင်သည် eSIMs အမျိုးမျိုးကို လွယ်ကူစွာ ပြောင်းလဲနိုင်ပြီး၊ အသုံးပြုမှုကို စောင့်ကြည့်နိုင်ကာ ကျွန်ုပ်တို့၏ ပံ့ပိုးမှုဝန်ဆောင်မှုများကို ရယူနိုင်ပါသည်။",
      "Nexora™ Hub သည် သင့်ရဲ့ ဒစ်ဂျစ်တယ်ချိတ်ဆက်မှုလိုအပ်ချက်အားလုံးကို အချိန်နှင့်တပြေးညီ အသုံးပြုမှုခြေရာခံခြင်းဖြင့် interface တစ်ခုထဲသို့ ပေါင်းစည်းပေးပါသည်။"
    ],
    
    nexoraPay: [
      "Nexora™ Pay သည် မည်သည့်ကဒ် သို့မဟုတ် ဒစ်ဂျစ်တယ်ပိုက်ဆံအိတ်ကိုမဆို အသုံးပြု၍ ဒစ်ဂျစ်တယ်နှင့် ရုပ်ပိုင်းဆိုင်ရာ ကုန်ပစ္စည်းများအတွက် ငွေပေးချေမှုများ ပြုလုပ်နိုင်စေပါသည်။",
      "ကျွန်ုပ်တို့၏ Nexora™ Pay ဝန်ဆောင်မှုသည် အဓိကငွေပေးချေမှုနည်းလမ်းများအားလုံးနှင့် ပေါင်းစည်းထားပြီး သင့်စိတ်ချမှုအတွက် လုံခြုံသော လုပ်ငန်းစဉ်များ ဆောင်ရွက်ပေးပါသည်။",
      "Nexora™ Pay ဖြင့်၊ သင်သည် ငွေကြေးအမျိုးအစားအမျိုးမျိုးနှင့် ငွေပေးချေမှုအမျိုးအစားများကို လွယ်ကူစွာ ကိုင်တွယ်နိုင်ပါသည်။"
    ],
    
    eco: [
      "ကျွန်ုပ်တို့၏ Eco Mode သည် ချိတ်ဆက်မှုကို ထိန်းသိမ်းထားစဉ် ဒေတာသုံးစွဲမှုနှင့် ဓာတ်ခဲသုံးစွဲမှုကို လျှော့ချရန် ကူညီပေးပြီး ရေရှည်တည်တံ့ခိုင်မြဲမှုတံဆိပ်များ ရရှိစေပါသည်။",
      "Nexora™ ၏ ကာဗွန်ခြေရာခံစနစ်များသည် Eco Mode ဖြင့် သင့်ရဲ့ ဒစ်ဂျစ်တယ်ကာဗွန်ရာလက်ဗွေကို စောင့်ကြည့်ရန်နှင့် လျှော့ချရန် ကူညီပေးပါသည်။",
      "ကျွန်ုပ်တို့၏ Eco Mode ကို အသုံးပြုခြင်းဖြင့်၊ သင်သည် စိမ်းလန်းသောအနာဂတ်အတွက် အထောက်အကူဖြစ်စေပါသည်။ ကျွန်ုပ်တို့သည် ထိန်းသိမ်းထားသောကာဗွန်ကို ခြေရာခံပြီး သင့်ကြိုးပမ်းမှုများကို အသိအမှတ်ပြုရန် ရေရှည်တည်တံ့ခိုင်မြဲမှုတံဆိပ်များ ချီးမြှင့်ပါသည်။"
    ],
    
    cloud: [
      "Nexora™ Cloud သည် ချဲ့ထွင်နိုင်သော ဖြေရှင်းချက်များအတွက် Cloudflare Workers၊ Supabase နှင့် Firebase ကို အသုံးပြု၍ လုံခြုံသော API ဘက်အင်ဂျင်များ ပံ့ပိုးပေးပါသည်။",
      "ကျွန်ုပ်တို့၏ ကလောက်အခြေခံအဆောက်အအုံသည် လုံခြုံရေးနှင့် ချဲ့ထွင်နိုင်မှုအတွက် ဒီဇိုင်းဆွဲထားပြီး ကျွန်ုပ်တို့၏ ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုအားလုံးကို အချောမွေ့ဆုံး ပံ့ပိုးပေးပါသည်။",
      "Nexora™ Cloud သည် ခေတ်မီလုံခြုံရေးဖြင့် သင့်ဒေတာကို ကာကွယ်ပေးထားပြီး မည်သည့်နေရာမှမဆို မြန်ဆန်၍ ယုံကြည်စိတ်ချရသော ရယူသုံးစွဲမှုကို ဖြစ်စေပါသည်။"
    ],
    
    verify: [
      "Nexora™ Verify သည် လုံခြုံသော သုံးစွဲသူမှတ်ပုံတင်ခြင်းအတွက် NRC OCR၊ မျက်နှာအသိအမှတ်ပြုခြင်းနှင့် ID အတည်ပြုခြင်းဖြင့် အချိန်နှင့်တစ်ပြေးညီ eKYC ပံ့ပိုးပေးပါသည်။",
      "ကျွန်ုပ်တို့၏ အတည်ပြုစနစ်သည် မြန်မာ NRC နှင့် နိုင်ငံတကာ ID များကို ပံ့ပိုးပေးရင်း အထောက်အထားစစ်ဆေးခြင်းကို မြန်ဆန်ပြီး လုံခြုံစေပါသည်။",
      "Nexora™ Verify သည် အမြင့်ဆုံးလုံခြုံရေးစံချိန်စံညွှန်းများကို ထိန်းသိမ်းထားစဉ် လုပ်ငန်းစဉ်အတည်ပြုခြင်းကို ရိုးရှင်းစေပြီး လိုက်နာမှုကို ရိုးရှင်းအောင် ပြုလုပ်ပေးပါသည်။"
    ],
    
    fallback: [
      "ကျွန်တော်သည် Nexora™ eSIM နှင့် ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုများကိုသာ ကူညီပေးရန် ပုံစံပြုလုပ်ထားပါသည်။ ကျွန်ုပ်တို့၏ ထုတ်ကုန်များနှင့်ပတ်သက်၍ အကူအညီလိုအပ်ပါက အသိပေးပါ။",
      "တောင်းပန်ပါတယ်၊ ကျွန်တော်သည် Nexora™ ဝန်ဆောင်မှုများနှင့်သက်ဆိုင်သော မေးခွန်းများကိုသာ ကူညီနိုင်ပါသည်။ ကျွန်ုပ်တို့၏ eSIM သို့မဟုတ် ဒစ်ဂျစ်တယ်ထုတ်ကုန်များအကြောင်း သိလိုသည်များ ရှိပါသလား?",
      "ဒါဟာ ကျွန်တော့်ရဲ့ ကျွမ်းကျင်မှုထက် ကျော်လွန်နေပါတယ်။ ကျွန်တော်သည် eSIM အသက်သွင်းခြင်း၊ Nexora Hub သို့မဟုတ် Nexora Pay ကဲ့သို့သော Nexora™ ၏ ထုတ်ကုန်များနှင့် ဝန်ဆောင်မှုများကို ကူညီရန် ရှိနေပါသည်။"
    ]
  }
};

// Helper function to detect language (very simple version)
const detectLanguage = (text) => {
  // Check for Burmese Unicode blocks
  const burmeseParts = text.match(/[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF]/g);
  return burmeseParts && burmeseParts.length > 0 ? 'mm' : 'en';
};

// Helper function to detect intent from text
const detectIntent = (text, language) => {
  text = text.toLowerCase();
  
  // Basic keyword matching
  if (text.includes('hello') || text.includes('hi') || text.includes('မင်္ဂလာပါ') || text.includes('ဟိုင်း')) {
    return 'greeting';
  }
  
  if (text.includes('esim') || text.includes('activate') || text.includes('scan') || 
      text.includes('qr') || text.includes('အသက်သွင်း')) {
    return 'esim';
  }
  
  if (text.includes('hub') || text.includes('platform') || text.includes('ပလက်ဖောင်း')) {
    return 'nexoraHub';
  }
  
  if (text.includes('pay') || text.includes('payment') || text.includes('wallet') || 
      text.includes('ငွေပေးချေ') || text.includes('ပေးချေမှု')) {
    return 'nexoraPay';
  }
  
  if (text.includes('eco') || text.includes('green') || text.includes('environment') || 
      text.includes('carbon') || text.includes('ပတ်ဝန်းကျင်') || text.includes('ကာဗွန်')) {
    return 'eco';
  }
  
  if (text.includes('cloud') || text.includes('api') || text.includes('backend') || 
      text.includes('server') || text.includes('ဘက်အင်ဂျင်')) {
    return 'cloud';
  }
  
  if (text.includes('verify') || text.includes('verification') || text.includes('identity') || 
      text.includes('kyc') || text.includes('nrc') || text.includes('အတည်ပြု')) {
    return 'verify';
  }
  
  // Default fallback
  return 'fallback';
};

// Get a random response from the array
const getRandomResponse = (responseArray) => {
  const randomIndex = Math.floor(Math.random() * responseArray.length);
  return responseArray[randomIndex];
};

/**
 * Mock Service to simulate Exa.ai API responses
 * @param {string} query - The user's query
 * @returns {Promise} - Promise that resolves with the API response
 */
export const getAIResponse = async (query) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // Detect language
    const language = detectLanguage(query);
    
    // Detect intent
    const intent = detectIntent(query, language);
    
    // Get appropriate response
    const responses = mockResponses[language][intent];
    const response = getRandomResponse(responses);
    
    return {
      success: true,
      response
    };
  } catch (error) {
    console.error('Error in mock AI service:', error);
    
    // Return a fallback response in the appropriate language
    const language = detectLanguage(query);
    const fallbackResponses = mockResponses[language].fallback;
    const fallbackResponse = getRandomResponse(fallbackResponses);
    
    return {
      success: false,
      response: fallbackResponse
    };
  }
};