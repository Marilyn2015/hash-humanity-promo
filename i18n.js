const STRINGS = {
  home: {
    en: {
      nav_learn: "Why HumanKey",
      nav_join: "Join",

      eyebrow: "HumanKey verified · Human-first by design",

      h1:
        "The internet was built for people.<br /><em>Let’s keep it that way.</em>",

      lead:
        "Hash Humanity is a new social layer for real people. <strong>HumanKey</strong> uses biometric liveness checks, passkeys, and privacy-preserving zero-knowledge proof to help keep bots, duplicate accounts, and manufactured outrage outside.",

      member_lbl: "humans and counting",

      subline:
        "No bot swarms · No duplicate identities · No algorithmic rage bait",

      launch: "Enter now",

      sec_kicker:
        "What changes when bots lose access",

      sec_h2:
        "Built for humans, <em>only humans</em>.",

      card1_h3:
        "HumanKey at the gate",

      card1_p:
        "One person, one presence. HumanKey helps stop bot farms, burner spam, impersonation, and duplicate accounts before they enter the conversation.",

      card2_h3:
        "Proof without exposure",

      card2_p:
        "Liveness checks, passkeys, and zero-knowledge proofs verify that you are human—without making your real-world identity the product.",

      card3_h3:
        "A feed worth your time",

      card3_p:
        "Less manipulation. Less manufactured conflict. More signal, curiosity, creativity, and conversations with people who are actually here.",

      card4_h3:
        "Humanity has a key",

      card4_p:
        "HumanKey is proof of personhood for the next internet: a place where humans—not bots—shape what gets seen, shared, and built.",

      cta_h2:
        "Enter the <em>human internet</em>.",

      cta_p:
        "Point your camera, open <strong>hashhumanity.world</strong>, and create your HumanKey. Then step into a network designed to feel human again.",

      fineprint:
        "<strong>Your face is not your password.</strong> Hash Humanity does not store raw biometric images, video, facial scans, or liveness recordings. HumanKey uses a privacy-preserving mathematical template and cryptographic proof to confirm humanity while minimizing the personal information required.",

      footer_tag:
        "The internet was built for people."
    }
  },

  mission: {
    en: {
      back: "← Back",
      launch: "Enter",

      eyebrow:
        "Human-verified social space",

      h1:
        "The internet is better<br />when it feels <em>human</em>.",

      lead:
        "Hash Humanity is a place for <strong>real people to meet, talk, and build community</strong>—without bot accounts, fake engagement, or automated noise getting in the way.",

      c1_idx:
        "01 — The idea",

      c1_h2:
        "Real people. Real rooms. Real conversation.",

      c1_p:
        "Every account begins with proof that there is a real, live person behind it. Hash Humanity is built for the people who want online spaces to feel real again.",

      c2_idx:
        "02 — HumanKey",

      c2_h2:
        "Proof of humanity, built in.",

      c2_p:
        "HumanKey helps confirm that a real person is creating an account and helps reduce duplicate accounts before they enter the community.",

      c3_idx:
        "03 — Your space",

      c3_h2:
        "Community without the noise.",

      c3_p:
        "Join chat rooms, find your people, and start conversations in a network designed for human participation—not automated activity.",

      pull:
        "<span>Less artificial engagement.</span> More actual humanity.",

      c4_idx:
        "04 — How it works",

      c4_h2:
        "One clean path into a human network.",

      step1:
        "<strong>Verify your humanity.</strong> Complete a quick HumanKey liveness check to help confirm you are a real person.",

      step2:
        "<strong>Set up your passkey.</strong> Create a secure, passwordless way to access your account.",

      step3:
        "<strong>Enter the conversation.</strong> Join community chat rooms and connect with other verified humans.",

      c5_idx:
        "05 — The mission",

      c5_h2:
        "Make online spaces feel real again.",

      c5_p:
        "Hash Humanity is designed to reduce bot activity, fake accounts, duplicate accounts, spam, and manufactured engagement—so people can spend more time actually connecting.",

      launch_now:
        "Enter Hash Humanity",

      contact_us:
        "Get in touch",

      footer_tag:
        "Real people make better spaces."
    }
  },

  join: {
    en: {
      back: "← Back",
      launch: "Enter",

      eyebrow:
        "Join · Human-verified · HumanKey protected",

      h1:
        "Come be <em>human</em> with us.",

      lead:
        "Hash Humanity is a network built for <strong>real people</strong>—no bots, no duplicate accounts, no spam, and no artificial noise. Tell us a little about yourself and we will help you get started.",

      lbl_name:
        "Your name",

      ph_name:
        "First name",

      lbl_email:
        "Email",

      lbl_role:
        "What brings you here?",

      opt_choose:
        "Choose one…",

      opt_member:
        "I want to join as a member",

      opt_creator:
        "I am a creator",

      opt_builder:
        "I am a builder / developer",

      opt_partner:
        "Partnership / organization",

      opt_press:
        "Press / media",

      opt_other:
        "Something else",

      lbl_message:
        "Anything you would like us to know? <span class=\"optional\">(optional)</span>",

      ph_message:
        "What are you hoping to do on Hash Humanity? Any questions?",

      submit:
        "Request an invite",

      done_h2:
        "You are <em>on the list</em>.",

      done_p:
        "Thanks for your interest—we have your details and someone from our team will contact you using the email you provided. Want to look around now?",

      launch_full:
        "Enter Hash Humanity",

      footer_tag:
        "Real people make better spaces.",

      err_name:
        "Please tell us your name.",

      err_email:
        "Please enter a valid email so we can reach you.",

      err_role:
        "Please choose what brings you here.",

      err_offline:
        "Could not reach our servers. Check your connection and try again.",

      sending:
        "Sending…",

      err_generic:
        "Something went wrong. Please try again."
    }
  }
};
const LANGUAGE_NAMES = {
  en: "English",
  fr: "Français",
  ms: "Bahasa Melayu",
  de: "Deutsch",
  zh: "中文",
  pt: "Português",
  es: "Español",
  ko: "한국어"
};

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_NAMES);

/*
  Translation overrides.

  The English strings in Piece 1 remain the fallback for every page.
  Add translated page content below as you expand or revise each language.
*/

const TRANSLATIONS = {
  fr: {
    home: {
      nav_learn: "Pourquoi HumanKey",
      nav_join: "Rejoindre",
      eyebrow: "Vérifié par HumanKey · Humain par conception",
      h1: "Internet a été créé pour les gens.<br /><em>Gardons-le ainsi.</em>",
      lead: "Hash Humanity est une nouvelle couche sociale pour de vraies personnes. <strong>HumanKey</strong> utilise des contrôles de présence biométriques, des clés d’accès et des preuves à divulgation nulle de connaissance afin d’aider à garder les bots, les comptes en double et l’indignation fabriquée à l’extérieur.",
      member_lbl: "humains et ce n’est qu’un début",
      subline: "Pas d’essaims de bots · Pas d’identités en double · Pas de rage bait algorithmique",
      launch: "Entrer maintenant",
      sec_kicker: "Ce qui change quand les bots perdent l’accès",
      sec_h2: "Conçu pour les humains, <em>uniquement les humains</em>.",
      card1_h3: "HumanKey à l’entrée",
      card1_p: "Une personne, une présence. HumanKey aide à arrêter les fermes de bots, le spam de comptes jetables, l’usurpation et les comptes en double avant qu’ils entrent dans la conversation.",
      card2_h3: "La preuve sans exposition",
      card2_p: "Les contrôles de présence, les clés d’accès et les preuves à divulgation nulle de connaissance confirment que vous êtes humain—sans faire de votre identité réelle le produit.",
      card3_h3: "Un fil qui mérite votre temps",
      card3_p: "Moins de manipulation. Moins de conflits fabriqués. Plus de signal, de curiosité, de créativité et de conversations avec des personnes réellement présentes.",
      card4_h3: "L’humanité a une clé",
      card4_p: "HumanKey est une preuve de personnalité pour le prochain internet : un endroit où les humains—et non les bots—façonnent ce qui est vu, partagé et créé.",
      cta_h2: "Entrez dans <em>l’internet humain</em>.",
      cta_p: "Pointez votre appareil photo, ouvrez <strong>hashhumanity.world</strong> et créez votre HumanKey. Entrez ensuite dans un réseau conçu pour redevenir humain.",
      footer_tag: "Internet a été créé pour les gens."
    },

    mission: {
      back: "← Retour",
      launch: "Entrer",
      eyebrow: "Espace social vérifié humainement",
      h1: "Internet est meilleur<br />quand il reste <em>humain</em>.",
      lead: "Hash Humanity est un espace où <strong>de vraies personnes se rencontrent, discutent et créent une communauté</strong>—sans comptes robots, faux engagement ni bruit automatisé.",
      c1_idx: "01 — L’idée",
      c1_h2: "De vraies personnes. De vrais espaces. De vraies conversations.",
      c1_p: "Chaque compte commence par la preuve qu’une personne réelle et présente se trouve derrière lui. Hash Humanity est conçu pour celles et ceux qui veulent que les espaces en ligne redeviennent réels.",
      c2_idx: "02 — HumanKey",
      c2_h2: "La preuve d’humanité, intégrée.",
      c2_p: "HumanKey aide à confirmer qu’une vraie personne crée un compte et à réduire les comptes en double avant leur arrivée dans la communauté.",
      c3_idx: "03 — Votre espace",
      c3_h2: "Une communauté sans le bruit.",
      c3_p: "Rejoignez des salons de discussion, trouvez votre communauté et échangez dans un réseau pensé pour la participation humaine, pas l’activité automatisée.",
      pull: "<span>Moins d’engagement artificiel.</span> Plus d’humanité réelle.",
      c4_idx: "04 — Comment ça marche",
      c4_h2: "Un accès simple à un réseau humain.",
      step1: "<strong>Vérifiez votre humanité.</strong> Effectuez une vérification HumanKey rapide pour aider à confirmer que vous êtes une vraie personne.",
      step2: "<strong>Configurez votre clé d’accès.</strong> Créez une manière sûre et sans mot de passe d’accéder à votre compte.",
      step3: "<strong>Entrez dans la conversation.</strong> Rejoignez des salons communautaires et échangez avec d’autres humains vérifiés.",
      c5_idx: "05 — La mission",
      c5_h2: "Redonner aux espaces en ligne un vrai sentiment humain.",
      c5_p: "Hash Humanity est conçu pour réduire les bots, faux comptes, comptes en double, spams et engagements fabriqués, afin que les gens passent plus de temps à réellement se connecter.",
      launch_now: "Entrer dans Hash Humanity",
      contact_us: "Nous contacter",
      footer_tag: "Les vraies personnes créent de meilleurs espaces."
    },

    join: {
      back: "← Retour",
      launch: "Entrer",
      eyebrow: "Rejoindre · Vérifié humainement · Protégé par HumanKey",
      h1: "Venez être <em>humain</em> avec nous.",
      lead: "Hash Humanity est un réseau conçu pour <strong>de vraies personnes</strong>—sans bots, comptes en double, spam ni bruit artificiel. Dites-nous un peu qui vous êtes et nous vous aiderons à commencer.",
      lbl_name: "Votre nom",
      ph_name: "Prénom",
      lbl_email: "E-mail",
      lbl_role: "Qu’est-ce qui vous amène ici ?",
      opt_choose: "Choisissez une option…",
      opt_member: "Je veux rejoindre comme membre",
      opt_creator: "Je suis créateur ou créatrice",
      opt_builder: "Je suis développeur ou développeuse",
      opt_partner: "Partenariat / organisation",
      opt_press: "Presse / médias",
      opt_other: "Autre chose",
      lbl_message: "Souhaitez-vous nous dire autre chose ? <span class=\"optional\">(facultatif)</span>",
      ph_message: "Que souhaitez-vous faire sur Hash Humanity ? Des questions ?",
      submit: "Demander une invitation",
      done_h2: "Vous êtes <em>sur la liste</em>.",
      done_p: "Merci de votre intérêt. Nous avons vos informations et un membre de notre équipe vous contactera à l’adresse e-mail fournie. Vous voulez découvrir le réseau maintenant ?",
      launch_full: "Entrer dans Hash Humanity",
      footer_tag: "Les vraies personnes créent de meilleurs espaces.",
      err_name: "Veuillez nous indiquer votre nom.",
      err_email: "Veuillez saisir une adresse e-mail valide.",
      err_role: "Veuillez choisir ce qui vous amène ici.",
      err_offline: "Impossible de joindre nos serveurs. Vérifiez votre connexion et réessayez.",
      sending: "Envoi en cours…",
      err_generic: "Un problème est survenu. Veuillez réessayer."
    }
  },

  ms: {
    home: {
      nav_learn: "Mengapa HumanKey",
      nav_join: "Sertai",
      eyebrow: "Disahkan HumanKey · Manusia diutamakan",
      h1: "Internet dibina untuk manusia.<br /><em>Mari kekalkannya begitu.</em>",
      lead: "Hash Humanity ialah lapisan sosial baharu untuk manusia sebenar. <strong>HumanKey</strong> menggunakan semakan liveness biometrik, passkey dan bukti sifar pengetahuan yang menjaga privasi untuk membantu mengekalkan bot, akaun pendua dan kemarahan yang direka di luar.",
      member_lbl: "manusia dan terus bertambah",
      subline: "Tiada kawanan bot · Tiada identiti pendua · Tiada rage bait algoritma",
      launch: "Masuk sekarang",
      sec_kicker: "Apa yang berubah apabila bot hilang akses",
      sec_h2: "Dibina untuk manusia, <em>hanya manusia</em>.",
      card1_h3: "HumanKey di pintu masuk",
      card1_p: "Satu orang, satu kehadiran. HumanKey membantu menghentikan ladang bot, spam akaun sementara, penyamaran dan akaun pendua sebelum memasuki perbualan.",
      card2_h3: "Bukti tanpa pendedahan",
      card2_p: "Semakan liveness, passkey dan bukti sifar pengetahuan mengesahkan bahawa anda manusia—tanpa menjadikan identiti dunia sebenar anda sebagai produk.",
      card3_h3: "Suapan yang berbaloi untuk masa anda",
      card3_p: "Kurang manipulasi. Kurang konflik yang direka. Lebih banyak isyarat, rasa ingin tahu, kreativiti dan perbualan dengan orang yang benar-benar hadir.",
      card4_h3: "Kemanusiaan mempunyai kunci",
      card4_p: "HumanKey ialah bukti keperibadian untuk internet seterusnya: tempat manusia—bukan bot—membentuk apa yang dilihat, dikongsi dan dibina.",
      cta_h2: "Masuk ke <em>internet manusia</em>.",
      cta_p: "Halakan kamera anda, buka <strong>hashhumanity.world</strong> dan cipta HumanKey anda. Kemudian masuk ke rangkaian yang direka untuk terasa manusia semula.",
      footer_tag: "Internet dibina untuk manusia."
    },

    mission: {
      back: "← Kembali",
      launch: "Masuk",
      eyebrow: "Ruang sosial disahkan manusia",
      h1: "Internet lebih baik<br />apabila terasa <em>manusia</em>.",
      lead: "Hash Humanity ialah ruang untuk <strong>orang sebenar bertemu, berbual dan membina komuniti</strong>—tanpa akaun bot, penglibatan palsu atau gangguan automatik.",
      c1_idx: "01 — Idea",
      c1_h2: "Orang sebenar. Ruang sebenar. Perbualan sebenar.",
      c1_p: "Setiap akaun bermula dengan bukti bahawa terdapat manusia sebenar yang hidup di belakangnya. Hash Humanity dibina untuk mereka yang mahu ruang dalam talian terasa nyata semula.",
      c2_idx: "02 — HumanKey",
      c2_h2: "Bukti kemanusiaan, terbina dalam.",
      c2_p: "HumanKey membantu mengesahkan bahawa manusia sebenar sedang mencipta akaun dan membantu mengurangkan akaun pendua sebelum memasuki komuniti.",
      c3_idx: "03 — Ruang anda",
      c3_h2: "Komuniti tanpa gangguan.",
      c3_p: "Sertai bilik sembang, temui komuniti anda dan mulakan perbualan dalam rangkaian yang direka untuk penyertaan manusia—bukan aktiviti automatik.",
      pull: "<span>Kurang penglibatan tiruan.</span> Lebih banyak kemanusiaan sebenar.",
      c4_idx: "04 — Cara ia berfungsi",
      c4_h2: "Satu laluan mudah ke rangkaian manusia.",
      step1: "<strong>Sahkan kemanusiaan anda.</strong> Lengkapkan semakan HumanKey yang pantas untuk membantu mengesahkan bahawa anda manusia sebenar.",
      step2: "<strong>Sediakan passkey anda.</strong> Cipta cara yang selamat dan tanpa kata laluan untuk mengakses akaun anda.",
      step3: "<strong>Sertai perbualan.</strong> Sertai bilik sembang komuniti dan berhubung dengan manusia lain yang telah disahkan.",
      c5_idx: "05 — Misi",
      c5_h2: "Jadikan ruang dalam talian terasa nyata semula.",
      c5_p: "Hash Humanity direka untuk mengurangkan aktiviti bot, akaun palsu, akaun pendua, spam dan penglibatan yang direka-reka—supaya orang ramai boleh meluangkan lebih masa untuk benar-benar berhubung.",
      launch_now: "Masuk Hash Humanity",
      contact_us: "Hubungi kami",
      footer_tag: "Orang sebenar mencipta ruang yang lebih baik."
    },

    join: {
      back: "← Kembali",
      launch: "Masuk",
      eyebrow: "Sertai · Disahkan manusia · Dilindungi HumanKey",
      h1: "Mari menjadi <em>manusia</em> bersama kami.",
      lead: "Hash Humanity ialah rangkaian untuk <strong>manusia sebenar</strong>—tanpa bot, akaun pendua, spam atau gangguan tiruan. Ceritakan sedikit tentang diri anda dan kami akan membantu anda bermula.",
      lbl_name: "Nama anda",
      ph_name: "Nama pertama",
      lbl_email: "E-mel",
      lbl_role: "Apa yang membawa anda ke sini?",
      opt_choose: "Pilih satu…",
      opt_member: "Saya mahu menyertai sebagai ahli",
      opt_creator: "Saya seorang pencipta",
      opt_builder: "Saya pembina / pembangun",
      opt_partner: "Perkongsian / organisasi",
      opt_press: "Akhbar / media",
      opt_other: "Sesuatu yang lain",
      lbl_message: "Apa-apa yang ingin anda beritahu kami? <span class=\"optional\">(pilihan)</span>",
      ph_message: "Apa yang anda harap dapat lakukan di Hash Humanity? Ada soalan?",
      submit: "Minta jemputan",
      done_h2: "Anda <em>sudah dalam senarai</em>.",
      done_p: "Terima kasih atas minat anda. Kami telah menerima maklumat anda dan pasukan kami akan menghubungi anda melalui e-mel yang diberikan. Mahu melihat-lihat sekarang?",
      launch_full: "Masuk Hash Humanity",
      footer_tag: "Orang sebenar mencipta ruang yang lebih baik.",
      err_name: "Sila beritahu kami nama anda.",
      err_email: "Sila masukkan e-mel yang sah supaya kami boleh menghubungi anda.",
      err_role: "Sila pilih apa yang membawa anda ke sini.",
      err_offline: "Tidak dapat menghubungi pelayan kami. Semak sambungan anda dan cuba lagi.",
      sending: "Menghantar…",
      err_generic: "Sesuatu telah berlaku. Sila cuba lagi."
    }
  }
};

/*
  German, Simplified Chinese, Portuguese, Spanish, and Korean use the English
  fallback until translated values are added below. The engine is complete and
  will automatically use them when their translation objects are present.
*/

window.HH_I18N = (function () {
  function normalizeLanguage(language) {
    const normalized = String(language || "en")
      .toLowerCase()
      .split("-")[0];

    return SUPPORTED_LANGUAGES.includes(normalized)
      ? normalized
      : "en";
  }

  function getLanguage() {
    const savedLanguage = localStorage.getItem("hh_language");

    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage;
    }

    return normalizeLanguage(navigator.language || "en");
  }

  function getStrings(page, language) {
    const english = STRINGS[page] && STRINGS[page].en;
    const translated = TRANSLATIONS[language] && TRANSLATIONS[language][page];

    return {
      ...(english || {}),
      ...(translated || {})
    };
  }

  function apply(page, language) {
    const strings = getStrings(page, language);

    window.HH_ACTIVE_STRINGS = strings;
    window.HH_ACTIVE_LANGUAGE = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (strings[key] !== undefined) {
        element.textContent = strings[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;

      if (strings[key] !== undefined) {
        element.innerHTML = strings[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;

      if (strings[key] !== undefined) {
        element.placeholder = strings[key];
      }
    });

    const languageLabel =
      document.getElementById("langBtnLabel") ||
      document.getElementById("languageLabel");

    if (languageLabel) {
      languageLabel.textContent = language.toUpperCase();
    }

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const selected = button.dataset.lang === language;

      button.setAttribute("aria-selected", String(selected));
      button.classList.toggle("active", selected);
    });
  }

  function buildLanguageMenu(page) {
    const menu = document.getElementById("langMenu");

    if (!menu) return;

    menu.innerHTML = SUPPORTED_LANGUAGES.map((language) => `
      <li>
        <button
          type="button"
          role="option"
          data-lang="${language}"
          aria-selected="false"
        >
          <span>${LANGUAGE_NAMES[language]}</span>
          <span class="code">${language.toUpperCase()}</span>
        </button>
      </li>
    `).join("");

    const languageButton = document.getElementById("langBtn");

    menu.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang, page);

        menu.classList.remove("open");

        if (languageButton) {
          languageButton.setAttribute("aria-expanded", "false");
        }
      });
    });

    if (languageButton) {
      languageButton.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");

        languageButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".lang-switch")) {
        menu.classList.remove("open");

        if (languageButton) {
          languageButton.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  function init(page) {
    buildLanguageMenu(page);
    apply(page, getLanguage());
  }

  function setLanguage(language, page) {
    const selectedLanguage = normalizeLanguage(language);

    localStorage.setItem("hh_language", selectedLanguage);
    apply(page, selectedLanguage);
  }

  return {
    init,
    setLanguage,
    getLanguage
  };
})();
