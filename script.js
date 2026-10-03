/* =========================================================
   ONE DENTAL CENTER
   Main JavaScript
   ========================================================= */

"use strict";


/* =========================================================
   HELPERS
   ========================================================= */

const $ = (selector, scope = document) =>
  scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    navHome: "Home",
    navAbout: "About",
    navTreatments: "Treatments",
    navGallery: "Smile Gallery",
    navContact: "Contact",

    eyebrow: "ORTHODONTIST & SMILE DESIGNER",

    tagline: "Healthy Teeth <b>•</b> Confident Smiles",

    heroDescription:
      "Creating beautiful smiles through advanced orthodontic care and personalized treatment plans.",

    bookAppointment: "Book an Appointment",
    exploreTreatments: "Explore Treatments",

    heroNote:
      "Personalized care. Confident smiles.",

    handwritten:
      "Your Smile<br>Our Passion",

    orthodonticCare:
      "Orthodontic Care",

    betterAlignment:
      "Better alignment.<br>Healthier smiles.",

    personalizedPlans:
      "Personalized Plans",

    smilePriority:
      "Your smile. Our priority.",

    caption:
      "Thoughtful care, beautifully delivered",

    personalizedCare:
      "Personalized Care",

    personalizedCareSub:
      "Made around your needs",

    modernTechniques:
      "Modern Techniques",

    modernTechniquesSub:
      "Thoughtful treatment planning",

    patientFirst:
      "Patient-first Approach",

    patientFirstSub:
      "Your comfort matters",

    aboutEyebrow:
      "A LITTLE ABOUT THE DOCTOR",

    aboutTitle:
      "A confident smile<br>starts with <em>care.</em>",

    aboutText:
      "At ONE Dental Center, every smile begins with listening. Dr. Malek Maged focuses on orthodontic care and individualized treatment planning, with clear guidance at every step of your smile journey.",

    aboutPoint1:
      "A plan tailored to your smile",

    aboutPoint2:
      "Clear explanations at every visit",

    aboutPoint3:
      "Care focused on comfort and confidence",

    talkToUs:
      "Talk to our team",

    treatmentsEyebrow:
      "CARE THAT FITS YOU",

    treatmentsTitle:
      "Orthodontic care,<br><em>your way.</em>",

    treatmentsIntro:
      "Explore treatment options and speak with the clinic to find out what may suit your needs.",

    treatment1:
      "Traditional Braces",

    treatment1Text:
      "A well-established option for correcting tooth alignment and bite concerns.",

    treatment2:
      "Clear Aligners",

    treatment2Text:
      "A discreet removable option that may be suitable for selected cases.",

    treatment3:
      "Early Orthodontic Review",

    treatment3Text:
      "An assessment to understand dental development and possible next steps.",

    treatment4:
      "Retainers & Follow-up",

    treatment4Text:
      "Support for maintaining your result after orthodontic treatment.",

    askAbout:
      'Ask about this <i class="fa-solid fa-arrow-right"></i>',

    medicalNote:
      "Treatment suitability and expected results depend on an individual clinical assessment.",

    galleryEyebrow:
      "REAL SMILES, REAL STORIES",

    galleryTitle:
      "The smile <em>gallery.</em>",

    galleryIntro:
      "Add approved before-and-after cases and clinic photos here to showcase treatment journeys.",

    galleryCard1:
      "Orthodontic Results",

    galleryCardSub1:
      "Before & after comparison",

    galleryCard2:
      "Smile Transformation",

    galleryCardSub2:
      "A journey to confidence",

    galleryCard3:
      "Case Highlight",

    galleryCardSub3:
      "Individualized treatment",

    galleryDisclaimer:
      "Only publish patient photos with documented consent. Results vary from person to person.",

    contactEyebrow:
      "YOUR NEXT CHAPTER STARTS HERE",

    contactTitle:
      "Let’s talk about<br><em>your smile.</em>",

    contactText:
      "Have a question or want to arrange a consultation? Send a message and our team can help you with the next step.",

    callUs:
      "Call us",

    emailUs:
      "Email",

    visitUs:
      "Visit us",

    location:
      "6 October City, Giza, Egypt",

    formStep:
      "QUICK CONTACT",

    formTitle:
      "Request a consultation",

    formText:
      "Fill in your details and continue to WhatsApp.",

    nameLabel:
      "Full name",

    namePlaceholder:
      "Your name",

    phoneLabel:
      "Phone number",

    phonePlaceholder:
      "+20 ...",

    interestLabel:
      "I’m interested in",

    option1:
      "Orthodontic consultation",

    option2:
      "Traditional braces",

    option3:
      "Clear aligners",

    option4:
      "Follow-up visit",

    option5:
      "Other question",

    messageLabel:
      "Message",

    optional:
      "(optional)",

    messagePlaceholder:
      "Tell us a little about what you need...",

    sendWhatsApp:
      "Continue on WhatsApp",

    formPrivacy:
      "Your details will be added to a WhatsApp message for the clinic.",

    footerText:
      "Thoughtful orthodontic care. Confident smiles.",

    rights:
      "All rights reserved.",

    whatsappTooltip:
      "Chat with us on WhatsApp",

    loading:
      "ONE DENTAL CENTER",

    imageError:
      "This gallery image is not available yet.",

    requiredFields:
      "Please enter your name and phone number.",

    whatsappOpened:
      "Opening WhatsApp..."
  },


  ar: {

    navHome: "الرئيسية",
    navAbout: "عن الطبيب",
    navTreatments: "الخدمات",
    navGallery: "معرض الابتسامة",
    navContact: "تواصل معنا",

    eyebrow: "طبيب تقويم أسنان ومصمم ابتسامة",

    tagline:
      "أسنان صحية <b>•</b> ابتسامة واثقة",

    heroDescription:
      "نصنع ابتسامات جميلة من خلال رعاية متقدمة في تقويم الأسنان وخطط علاج مصممة خصيصًا لكل حالة.",

    bookAppointment:
      "احجز موعدك",

    exploreTreatments:
      "استكشف الخدمات",

    heroNote:
      "رعاية شخصية. ابتسامة واثقة.",

    handwritten:
      "ابتسامتك<br>شغفنا",

    orthodonticCare:
      "رعاية تقويم الأسنان",

    betterAlignment:
      "اصطفاف أفضل.<br>ابتسامة أكثر صحة.",

    personalizedPlans:
      "خطط علاج شخصية",

    smilePriority:
      "ابتسامتك هي أولويتنا.",

    caption:
      "رعاية مدروسة بتفاصيل جميلة",

    personalizedCare:
      "رعاية شخصية",

    personalizedCareSub:
      "مصممة وفق احتياجاتك",

    modernTechniques:
      "تقنيات حديثة",

    modernTechniquesSub:
      "تخطيط علاجي مدروس",

    patientFirst:
      "المريض أولًا",

    patientFirstSub:
      "راحتك تهمنا",

    aboutEyebrow:
      "نبذة عن الطبيب",

    aboutTitle:
      "ابتسامة واثقة<br>تبدأ بـ <em>الاهتمام.</em>",

    aboutText:
      "في ONE Dental Center تبدأ كل ابتسامة بالاستماع. يركز د. مالك ماجد على رعاية تقويم الأسنان ووضع خطط علاج فردية، مع شرح واضح لكل خطوة في رحلة ابتسامتك.",

    aboutPoint1:
      "خطة علاج مصممة لابتسامتك",

    aboutPoint2:
      "شرح واضح في كل زيارة",

    aboutPoint3:
      "رعاية تركز على الراحة والثقة",

    talkToUs:
      "تحدث مع فريقنا",

    treatmentsEyebrow:
      "رعاية تناسبك",

    treatmentsTitle:
      "رعاية تقويم الأسنان،<br><em>بطريقتك.</em>",

    treatmentsIntro:
      "استكشف خيارات العلاج وتواصل مع العيادة لمعرفة ما قد يناسب احتياجاتك.",

    treatment1:
      "التقويم التقليدي",

    treatment1Text:
      "خيار علاجي معروف وفعّال لتصحيح اصطفاف الأسنان وبعض مشكلات الإطباق.",

    treatment2:
      "التقويم الشفاف",

    treatment2Text:
      "خيار متحرك وغير ظاهر قد يكون مناسبًا لبعض الحالات المختارة.",

    treatment3:
      "تقييم تقويم الأسنان المبكر",

    treatment3Text:
      "تقييم يساعد على فهم تطور الأسنان وتحديد الخطوات المحتملة التالية.",

    treatment4:
      "مثبتات الأسنان والمتابعة",

    treatment4Text:
      "دعم للحفاظ على النتيجة بعد انتهاء علاج التقويم.",

    askAbout:
      'اسأل عن الخدمة <i class="fa-solid fa-arrow-left"></i>',

    medicalNote:
      "مدى ملاءمة العلاج والنتائج المتوقعة يعتمدان على التقييم السريري لكل حالة.",

    galleryEyebrow:
      "ابتسامات حقيقية، قصص حقيقية",

    galleryTitle:
      "معرض <em>الابتسامة.</em>",

    galleryIntro:
      "أضف الحالات المعتمدة قبل وبعد العلاج وصور العيادة لعرض رحلات العلاج.",

    galleryCard1:
      "نتائج التقويم",

    galleryCardSub1:
      "مقارنة قبل وبعد",

    galleryCard2:
      "تحول الابتسامة",

    galleryCardSub2:
      "رحلة نحو الثقة",

    galleryCard3:
      "حالة مميزة",

    galleryCardSub3:
      "علاج مصمم للحالة",

    galleryDisclaimer:
      "يجب نشر صور المرضى فقط بعد الحصول على موافقة موثقة. النتائج تختلف من شخص لآخر.",

    contactEyebrow:
      "خطوتك القادمة تبدأ من هنا",

    contactTitle:
      "لنتحدث عن<br><em>ابتسامتك.</em>",

    contactText:
      "لديك سؤال أو ترغب في ترتيب استشارة؟ أرسل لنا رسالة وسيساعدك فريقنا في الخطوة التالية.",

    callUs:
      "اتصل بنا",

    emailUs:
      "البريد الإلكتروني",

    visitUs:
      "العنوان",

    location:
      "مدينة 6 أكتوبر، الجيزة، مصر",

    formStep:
      "تواصل سريع",

    formTitle:
      "طلب استشارة",

    formText:
      "أدخل بياناتك ثم تابع عبر واتساب.",

    nameLabel:
      "الاسم بالكامل",

    namePlaceholder:
      "اكتب اسمك",

    phoneLabel:
      "رقم الهاتف",

    phonePlaceholder:
      "+20 ...",

    interestLabel:
      "مهتم بـ",

    option1:
      "استشارة تقويم الأسنان",

    option2:
      "التقويم التقليدي",

    option3:
      "التقويم الشفاف",

    option4:
      "زيارة متابعة",

    option5:
      "استفسار آخر",

    messageLabel:
      "الرسالة",

    optional:
      "(اختياري)",

    messagePlaceholder:
      "اكتب لنا نبذة بسيطة عن احتياجك...",

    sendWhatsApp:
      "تابع عبر واتساب",

    formPrivacy:
      "سيتم إضافة بياناتك إلى رسالة واتساب موجهة للعيادة.",

    footerText:
      "رعاية مدروسة لتقويم الأسنان. ابتسامات واثقة.",

    rights:
      "جميع الحقوق محفوظة.",

    whatsappTooltip:
      "تواصل معنا عبر واتساب",

    loading:
      "ONE DENTAL CENTER",

    imageError:
      "صورة المعرض غير متاحة حاليًا.",

    requiredFields:
      "من فضلك أدخل الاسم ورقم الهاتف.",

    whatsappOpened:
      "جارٍ فتح واتساب..."
  }

};


/* =========================================================
   STATE
   ========================================================= */

const LANGUAGE_KEY = "oneDentalLanguage";
const THEME_KEY = "oneDentalTheme";

let currentLanguage =
  localStorage.getItem(LANGUAGE_KEY) || "en";

let currentTheme =
  localStorage.getItem(THEME_KEY) || "light";

let toastTimer = null;


/* =========================================================
   PAGE LOADER
   ========================================================= */

function hideLoader(){
  const loader = $("#pageLoader");

  if(!loader) return;

  loader.classList.add("hidden");
}

window.addEventListener("load", () => {
  setTimeout(hideLoader, 350);
});

setTimeout(hideLoader, 1800);


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function updateYear(){
  const year = $("#currentYear");

  if(year){
    year.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   TRANSLATION
   ========================================================= */

function translateElement(element, language){

  const key = element.dataset.i18n;

  if(!key) return;

  const value = translations[language]?.[key];

  if(value === undefined) return;

  element.innerHTML = value;
}


function translatePlaceholders(language){

  $$("[data-i18n-placeholder]").forEach(element => {

    const key = element.dataset.i18nPlaceholder;

    const value =
      translations[language]?.[key];

    if(value !== undefined){
      element.placeholder = value;
    }

  });
}


function applyLanguage(language){

  if(!translations[language]){
    language = "en";
  }

  currentLanguage = language;

  const html = document.documentElement;

  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach(element => {
    translateElement(element, language);
  });

  translatePlaceholders(language);

  const languageToggle = $("#languageToggle");

  if(languageToggle){
    languageToggle.textContent =
      language === "ar" ? "EN" : "عربي";

    languageToggle.setAttribute(
      "aria-label",
      language === "ar"
        ? "Switch to English"
        : "التبديل إلى العربية"
    );
  }

  document.title =
    language === "ar"
      ? "د. مالك ماجد | ONE Dental Center"
      : "Dr. Malek Maged | ONE Dental Center";

  const metaDescription =
    document.querySelector('meta[name="description"]');

  if(metaDescription){

    metaDescription.content =
      language === "ar"
        ? "د. مالك ماجد — طبيب تقويم أسنان ومصمم ابتسامة في ONE Dental Center."
        : "Dr. Malek Maged — Orthodontist and smile designer at ONE Dental Center.";
  }

  localStorage.setItem(
    LANGUAGE_KEY,
    language
  );

  updateMobileNavState();
}


/* =========================================================
   LANGUAGE TOGGLE
   ========================================================= */

const languageToggle = $("#languageToggle");

if(languageToggle){

  languageToggle.addEventListener("click", () => {

    applyLanguage(
      currentLanguage === "en"
        ? "ar"
        : "en"
    );

  });

}


/* =========================================================
   THEME
   ========================================================= */

function applyTheme(theme){

  const isDark = theme === "dark";

  document.body.classList.toggle(
    "dark-mode",
    isDark
  );

  const themeToggle = $("#themeToggle");

  if(themeToggle){

    themeToggle.innerHTML = isDark
      ? '<i class="fa-regular fa-sun"></i>'
      : '<i class="fa-regular fa-moon"></i>';

    themeToggle.setAttribute(
      "aria-label",
      isDark
        ? "Switch to light mode"
        : "Switch to dark mode"
    );
  }

  localStorage.setItem(
    THEME_KEY,
    theme
  );
}


const themeToggle = $("#themeToggle");

if(themeToggle){

  themeToggle.addEventListener("click", () => {

    currentTheme =
      document.body.classList.contains("dark-mode")
        ? "light"
        : "dark";

    applyTheme(currentTheme);

  });

}


/* =========================================================
   MOBILE NAV
   ========================================================= */

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");
const siteHeader = $("#siteHeader");


function updateMobileNavState(){

  if(!menuToggle || !mainNav) return;

  const isOpen =
    mainNav.classList.contains("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? currentLanguage === "ar"
        ? "إغلاق القائمة"
        : "Close navigation"
      : currentLanguage === "ar"
        ? "فتح القائمة"
        : "Open navigation"
  );

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

  if(siteHeader){
    siteHeader.classList.toggle(
      "menu-open",
      isOpen
    );
  }
}


function closeMobileNav(){

  if(!mainNav) return;

  mainNav.classList.remove("open");

  updateMobileNavState();
}


if(menuToggle && mainNav){

  menuToggle.addEventListener("click", event => {

    event.stopPropagation();

    mainNav.classList.toggle("open");

    updateMobileNavState();

  });


  $$(".nav-link", mainNav).forEach(link => {

    link.addEventListener("click", () => {
      closeMobileNav();
    });

  });


  document.addEventListener("click", event => {

    if(
      mainNav.classList.contains("open") &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ){
      closeMobileNav();
    }

  });


  document.addEventListener("keydown", event => {

    if(event.key === "Escape"){
      closeMobileNav();
    }

  });

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

const backToTop = $("#backToTop");


function handleScroll(){

  const scrolled =
    window.scrollY > 25;

  if(siteHeader){
    siteHeader.classList.toggle(
      "scrolled",
      scrolled
    );
  }

  if(backToTop){

    backToTop.classList.toggle(
      "visible",
      window.scrollY > 500
    );
  }

}


window.addEventListener(
  "scroll",
  handleScroll,
  { passive:true }
);

handleScroll();


/* =========================================================
   BACK TO TOP
   ========================================================= */

if(backToTop){

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }
  );

}


/* =========================================================
   ACTIVE NAV
   ========================================================= */

const sections =
  $$("main section[id]");

const navLinks =
  $$(".nav-link");


function updateActiveNav(){

  if(!sections.length) return;

  const scrollPosition =
    window.scrollY + 180;

  let activeId = "home";

  sections.forEach(section => {

    if(
      scrollPosition >= section.offsetTop &&
      scrollPosition <
        section.offsetTop + section.offsetHeight
    ){
      activeId = section.id;
    }

  });

  navLinks.forEach(link => {

    const href =
      link.getAttribute("href");

    link.classList.toggle(
      "active",
      href === `#${activeId}`
    );

  });

}


window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive:true }
);

updateActiveNav();


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

const revealElements =
  $$(".reveal");


if(
  "IntersectionObserver" in window
){

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target.classList.add(
              "revealed"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold:.12,
        rootMargin:"0px 0px -40px 0px"
      }
    );


  revealElements.forEach(element => {

    revealObserver.observe(element);

  });

}else{

  revealElements.forEach(element => {
    element.classList.add("revealed");
  });

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

const lightbox =
  $("#lightbox");

const lightboxImage =
  $("#lightboxImage");

const closeLightboxButton =
  $("#closeLightbox");


function openLightbox(imageSource){

  if(!lightbox || !lightboxImage){
    return;
  }

  if(!imageSource){
    showToast(
      translations[currentLanguage].imageError
    );

    return;
  }

  lightboxImage.src = imageSource;

  lightboxImage.onload = () => {

    lightbox.classList.add("open");

    lightbox.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";

  };

  lightboxImage.onerror = () => {

    lightboxImage.removeAttribute("src");

    showToast(
      translations[currentLanguage].imageError
    );

  };

}


function closeLightbox(){

  if(!lightbox) return;

  lightbox.classList.remove("open");

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

  if(lightboxImage){
    lightboxImage.removeAttribute("src");
  }

}


$$(".gallery-card").forEach(card => {

  card.addEventListener("click", () => {

    const imageSource =
      card.dataset.image ||
      $("img", card)?.src;

    openLightbox(imageSource);

  });

});


if(closeLightboxButton){

  closeLightboxButton.addEventListener(
    "click",
    closeLightbox
  );

}


if(lightbox){

  lightbox.addEventListener(
    "click",
    event => {

      if(event.target === lightbox){
        closeLightbox();
      }

    }
  );

}


document.addEventListener(
  "keydown",
  event => {

    if(
      event.key === "Escape" &&
      lightbox?.classList.contains("open")
    ){
      closeLightbox();
    }

  }
);


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message){

  const toast = $("#toast");

  if(!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 3500);
}


/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
  $("#contactForm");


if(contactForm){

  contactForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const fullName =
        $("#fullName")?.value.trim() || "";

      const phone =
        $("#phone")?.value.trim() || "";

      const interest =
        $("#interest")?.value || "";

      const message =
        $("#message")?.value.trim() || "";


      if(!fullName || !phone){

        showToast(
          translations[currentLanguage]
            .requiredFields
        );

        if(!fullName){
          $("#fullName")?.focus();
        }else{
          $("#phone")?.focus();
        }

        return;
      }


      const isArabic =
        currentLanguage === "ar";


      const whatsappMessage =
        isArabic

          ? [
              "مرحبًا ONE Dental Center 🌿",
              "",
              `الاسم: ${fullName}`,
              `رقم الهاتف: ${phone}`,
              `الاهتمام: ${interest}`,
              message
                ? `الرسالة: ${message}`
                : ""
            ]
            .filter(Boolean)
            .join("\n")

          : [
              "Hello ONE Dental Center 🌿",
              "",
              `Name: ${fullName}`,
              `Phone: ${phone}`,
              `Interested in: ${interest}`,
              message
                ? `Message: ${message}`
                : ""
            ]
            .filter(Boolean)
            .join("\n");


      const whatsappUrl =
        `https://wa.me/201069678107?text=${encodeURIComponent(
          whatsappMessage
        )}`;


      showToast(
        translations[currentLanguage]
          .whatsappOpened
      );


      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );

    }
  );

}


/* =========================================================
   SMOOTH ANCHOR LINKS
   ========================================================= */

$$('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if(
      !targetId ||
      targetId === "#"
    ){
      return;
    }

    const target =
      document.querySelector(targetId);

    if(!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });

    if(
      history.pushState
    ){
      history.pushState(
        null,
        "",
        targetId
      );
    }

  });

});


/* =========================================================
   IMAGE PLACEHOLDER SUPPORT
   ========================================================= */

$$(".gallery-card").forEach(card => {

  const image =
    $("img", card);

  if(!image) return;

  image.addEventListener(
    "error",
    () => {

      card.classList.add(
        "image-placeholder"
      );

    }
  );

});


/* =========================================================
   INITIALIZE
   ========================================================= */

updateYear();

applyLanguage(
  currentLanguage
);

applyTheme(
  currentTheme
);

updateMobileNavState();