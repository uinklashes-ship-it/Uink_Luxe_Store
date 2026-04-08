import { useMemo, useState } from "react";

export default function UinkLuxuryStore() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [openIndex, setOpenIndex] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const whatsappBase = "https://wa.me/573013439680";

  const filters = [
    "Todos",
    "Adhesivos",
    "Pestañas",
    "Pinzas",
    "Limpieza",
    "Removedores",
    "Boonder",
    "Micropigmentación",
  ];

  const products = [
    {
      name: "Deluxe",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Alta retención y elegancia para lashistas exigentes.",
      description:
        "DELUXE es esa mezcla entre desempeño pro y presentación premium. Con textura fluida y libre de etil-cianoacrilato, asegura una adhesión potente y una experiencia más saludable en cada aplicación.",
      bullets: [
        "Secado rápido: 0.3 seg",
        "Humedad ideal: 60-70%",
        "Temperatura ideal: 24-30 °C",
        "Textura: fluida",
        "Sin etil-cianoacrilato",
      ],
      note: "Rinde, luce y protege en cada aplicación.",
      image: "https://i.imgur.com/YnW3sOS.jpeg",
    },
    {
      name: "Volume Pro",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Adhesivo profesional para manos rápidas y ambientes exigentes.",
      description:
        "UINK VOLUME PRO es ideal si trabajas en estudios con alta humedad o si ya tienes agilidad con la pinza. Su fórmula libre de etil-cianoacrilato garantiza una aplicación más segura, técnica y profesional.",
      bullets: [
        "Secado ultra rápido: 0.5 a 1 seg",
        "Retención: hasta 7 semanas",
        "Humedad ideal: 45-65%",
        "Temperatura ideal: 20-25 °C",
        "Textura: fluida",
        "Sin etil-cianoacrilato",
      ],
      note: "Perfecto si buscas velocidad y máxima adherencia.",
      image: "https://i.imgur.com/HmuYh3m.jpeg",
    },
    {
      name: "Fantasy",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Adhesivo versátil que se adapta a diferentes condiciones.",
      description:
        "UINK FANTASY tiene una textura balanceada y un secado que te da control, sin sacrificar durabilidad. Libre de etil-cianoacrilato, se adapta tanto a estudios con variaciones climáticas como a manos en evolución.",
      bullets: [
        "Secado controlado: 0,5 seg",
        "Retención: hasta 6 semanas",
        "Humedad ideal: 50-65%",
        "Temperatura ideal: 20-25 °C",
        "Textura: media",
        "Sin etil-cianoacrilato",
      ],
      note: "Ideal si buscas estabilidad y seguridad en cada aplicación.",
      image: "https://i.imgur.com/Ryhf58z.jpeg",
    },
    {
      name: "Classic Pro",
      category: "Adhesivos",
      priceValue: 80000,
      priceLabel: "$ 80.000 COP",
      tagline: "Adhesivo confiable para manos en formación o climas cálidos.",
      description:
        "Con una fórmula libre de etil-cianoacrilato, CLASSIC PRO es perfecto si estás comenzando o si trabajas en zonas de calor donde otros adhesivos se comportan inestables.",
      bullets: [
        "Secado suave: 1.5 a 2 seg",
        "Retención: hasta 5 semanas",
        "Humedad ideal: 50-65%",
        "Temperatura ideal: 20-26 °C",
        "Textura: medio espesa",
        "Sin etil-cianoacrilato",
      ],
      note: "Te acompaña mientras mejoras tu ritmo y técnica.",
      image: "https://i.imgur.com/YiY1pn3.jpeg",
    },
    {
      name: "Boonder",
      category: "Boonder",
      priceValue: 75000,
      priceLabel: "$ 75.000 COP",
      tagline: "Fijación y retención + en cada set.",
      description:
        "Nuestro bonder sella la unión del adhesivo con la pestaña natural, potenciando la retención desde el primer día. Además, reduce la irritación, elimina vapores y acelera el curado del pegamento sin generar rigidez.",
      bullets: [
        "Se aplica al final del servicio",
        "Compatible con cualquier adhesivo",
        "Mejora la durabilidad del trabajo",
        "Reduce sensibilidad post-aplicación",
      ],
      note: "Ese último toque que marca la diferencia y hace que vuelvan.",
      image: "https://i.imgur.com/TYHejp5.jpeg",
    },
    {
      name: "Removedor en crema",
      category: "Removedores",
      priceValue: 40000,
      priceLabel: "$ 40.000 COP",
      tagline: "Fórmula profesional libre de ardor.",
      description:
        "Diseñado para eliminar extensiones de pestañas de forma segura, rápida y sin irritación. Su textura cremosa permite una aplicación precisa y controlada, ideal para ojos sensibles.",
      bullets: [
        "Textura en crema: no escurre ni gotea",
        "Remoción eficaz en minutos",
        "Compatible con todos los adhesivos UINK",
        "Aroma neutro, libre de aceites y parabenos",
        "Recomendado para uso profesional",
      ],
      note: "Resultados seguros para ti y tus clientas.",
      image: "https://i.imgur.com/uiwOHzX.jpeg",
    },
    {
      name: "Shampoo Limpiador Profesional UINK",
      category: "Limpieza",
      priceValue: 25000,
      priceLabel: "$ 25.000 COP",
      tagline: "Limpieza profunda sin maltratar.",
      description:
        "El aliado perfecto para preparar la mirada. Su fórmula suave pero efectiva elimina sebo, polvo y residuos de maquillaje sin irritar, dejando las pestañas listas para una mejor adhesión y mayor duración del set.",
      bullets: [
        "pH balanceado",
        "Libre de aceites y parabenos",
        "Apto para ojos sensibles",
        "Espuma cremosa de alto rendimiento",
      ],
      note: "Una buena retención comienza con una buena limpieza.",
      image: "https://i.imgur.com/4dDF7Ig.jpeg",
    },
    {
      name: "Espejo UINK",
      category: "Pestañas",
      priceValue: 40000,
      priceLabel: "$ 40.000 COP",
      tagline: "Precisión visual para revisar cada detalle del set.",
      description:
        "El espejo UINK está pensado para lashistas que quieren controlar ángulos, simetría y limpieza visual durante cada procedimiento. Ligero, práctico y con una estética elegante para acompañar tu mesa de trabajo.",
      bullets: [
        "Ideal para revisar dirección y cobertura",
        "Ligero y cómodo de manipular",
        "Acabado visual elegante",
        "Perfecto para control de detalle en lash sets",
      ],
      note: "Una herramienta pequeña que aporta más control y profesionalismo al resultado final.",
      image: "https://i.imgur.com/AS4Xnca.jpeg",
    },
    {
      name: "Porta pestañas Acrílico UINK",
      category: "Pestañas",
      priceValue: 60000,
      priceLabel: "$ 60.000 COP",
      tagline: "Organización, estética y funcionalidad.",
      description:
        "El portapestañas que no solo te hace la vida más fácil, sino que eleva el nivel de tu mesa de trabajo. Fabricado en acrílico resistente con base antideslizante, líneas visibles y espacio perfecto para fans o clásicos.",
      bullets: [
        "Base estable y ligera",
        "Medidas marcadas para mayor precisión",
        "Compatible con todas las curvaturas",
        "Diseño limpio y profesional",
      ],
      note: "Tu mesa, tu estilo. UINK te respalda.",
      image: "https://i.imgur.com/WbTYR1P.jpeg",
    },
    {
      name: "Trebori OR",
      category: "Micropigmentación",
      priceValue: 60000,
      priceLabel: "$ 60.000 COP",
      tagline: "Arte, técnica y perfección en cada trazo.",
      description:
        "Herramienta desarrollada por el formador Óscar, fabricada en acero inoxidable coreano de grado quirúrgico, reconocida por su resistencia, durabilidad y acabado profesional.",
      bullets: [
        "Compatible con agujas U, curvas y planas",
        "Sistema de sujeción reforzado",
        "Acero coreano esterilizable",
        "Mango antideslizante y peso balanceado",
      ],
      note: "Alta precisión para microblading artístico y estructurado.",
      image: "https://i.imgur.com/d7j385l.jpeg",
    },
  ];

  const pinzasEmma = {
    name: "Pinzas UINK by Emma",
    category: "Pinzas",
    image: "https://i.imgur.com/NP4uxRo.jpeg",
    priceValue: 45000,
    description:
      "Nuestras pinzas UINK combinan precisión profesional, ergonomía y un diseño rosa elegante que eleva tu estación de trabajo. Herramientas creadas para lashistas que trabajan al más alto nivel.",
    models: [
      "Pinza Curva de Volumen (Boot / Panzona)",
      "Pinza Angular en L (L-Type)",
      "Pinza de Aislamiento Recta",
      "Pinza Recta Larga de Precisión",
    ],
  };

  const pinzaPink = {
    name: "Pinza Pink",
    category: "Pinzas",
    image: "https://i.imgur.com/1pyfkoj.jpeg",
    priceValue: 45000,
    description:
      "Una edición limitada creada para lashistas que valoran la precisión y el estilo. Su punta rectificada con tecnología Nano Tech permite una adherencia milimétrica del abanico, ideal para técnicas de volumen y mega volumen.",
    bullets: [
      "Nano Tech Grip: mejora la sujeción sin deslizamientos",
      "Recubrimiento especial rosado con acabado antideslizante",
      "Cierre ultra fino y alineación perfecta",
      "Compatible con técnicas Russian, Wispy y Dark Volume",
      "Incluye caja protectora transparente y paño de limpieza profesional",
    ],
  };

  const classicLashes = {
    name: "Pestañas Clásicas",
    category: "Pestañas",
    image: "https://i.imgur.com/0Oq7zeZ.jpeg",
    priceValue: 25000,
    description:
      "Descubre la elegancia de lo sutil. Diseñadas para looks naturales, limpios y profesionales, con opciones pensadas para distintas necesidades dentro de la técnica clásica.",
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07", "0.15"],
  };

  const fibrasTech = {
    name: "Fibras Tecnológicas",
    category: "Pestañas",
    image: "https://i.imgur.com/I3mPzvK.jpeg",
    effectPrices: { YY: 32000, "3DW": 32000, "4DW": 35000, "5DW": 38000 },
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07"],
    description:
      "Sets modernos, ligeros y con más textura visual para lashistas que buscan impacto, tendencia y facilidad de trabajo.",
  };

  const fibrasU = {
    name: "Fibras Tecnológicas en U",
    category: "Pestañas",
    image: "https://i.imgur.com/iIxXHwA.jpeg",
    effectPrices: {
      "U Rímel": 35000,
      U2D: 35000,
      U3D: 35000,
      U4D: 38000,
      U5D: 40000,
    },
    lengths: ["8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "MIX"],
    thickness: ["0.07"],
    description:
      "Volumen uniforme, oscuro y definido para sets con más presencia, efecto rímel y acabados intensos.",
  };

  const efectosEspeciales = {
    name: "Pestañas Efectos Especiales",
    category: "Pestañas",
    image: "https://i.imgur.com/ssW1AIn.jpeg",
    effectPrices: { "Vol Russo": 25000, Commic: 30000, "Brown 3DW": 45000 },
    lengths: ["MIX"],
    thickness: ["0.07"],
    curves: ["D", "C", "J", "L", "M"],
    description:
      "Colección diseñada para lashistas que quieren salir de lo tradicional y ofrecer sets con personalidad, carácter visual y efectos más creativos dentro de su catálogo profesional.",
  };

  const [pinzaModel, setPinzaModel] = useState(pinzasEmma.models[0]);
  const [classicLength, setClassicLength] = useState("10mm");
  const [classicThickness, setClassicThickness] = useState("0.07");
  const [techEffect, setTechEffect] = useState("YY");
  const [techLength, setTechLength] = useState("10mm");
  const [techThickness, setTechThickness] = useState("0.07");
  const [uEffect, setUEffect] = useState("U Rímel");
  const [uLength, setULength] = useState("10mm");
  const [uThickness, setUThickness] = useState("0.07");
  const [especialEffect, setEspecialEffect] = useState("Vol Russo");
  const [especialCurve, setEspecialCurve] = useState("D");

  const addToCart = (item) => {
    setCart((prev) => {
      const key = item.cartKey || item.name;
      const existing = prev.find((p) => (p.cartKey || p.name) === key);
      if (existing) {
        return prev.map((p) =>
          (p.cartKey || p.name) === key ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const changeQuantity = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          (item.cartKey || item.name) === key
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (key) =>
    setCart((prev) =>
      prev.filter((item) => (item.cartKey || item.name) !== key)
    );

  const filteredProducts = useMemo(() => {
    if (activeFilter === "Todos") return products;
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const showVariantsSection =
    activeFilter === "Todos" ||
    activeFilter === "Pestañas" ||
    activeFilter === "Pinzas";

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.priceValue * item.quantity,
    0
  );

  const checkoutMessage = useMemo(() => {
    if (!cart.length) return whatsappBase;
    const intro = `Hola, quiero hacer este pedido del catálogo UINK.%0A%0A`;
    const customer = `${customerName ? `Nombre: ${customerName}%0A` : ""}${
      customerCity ? `Ciudad: ${customerCity}%0A` : ""
    }${customerAddress ? `Dirección: ${customerAddress}%0A` : ""}`;
    const items = cart
      .map(
        (item) =>
          `• ${item.name}${item.variant ? ` (${item.variant})` : ""} x${
            item.quantity
          } — $ ${item.priceValue.toLocaleString("es-CO")} COP`
      )
      .join("%0A");
    const total = `%0A%0ATotal estimado: $ ${cartTotal.toLocaleString(
      "es-CO"
    )} COP%0AAdjunto comprobante de pago para confirmar pedido.`;
    return `${whatsappBase}?text=${intro}${customer}${items}${total}`;
  }, [cart, cartTotal, customerName, customerCity, customerAddress]);

  const testimonials = [
    {
      name: "Lashista Bogotá",
      text: "Volume Pro me dio la velocidad que necesitaba sin sacrificar retención. Se siente premium desde que lo usas.",
    },
    {
      name: "Studio Artist",
      text: "El boonder cambió por completo mis resultados. Mis sets duran más y mis clientas notan la diferencia.",
    },
    {
      name: "Pro Lash Tech",
      text: "UINK tiene ese equilibrio entre presentación, técnica y funcionalidad que una lashista de alto nivel busca.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:'Inter',sans-serif;background:#070707;color:#f5f1e8} a{text-decoration:none} button,select,input,option{font-family:inherit}
        option{background:#111;color:#fff}
        .page{min-height:100vh;background:radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 32%),linear-gradient(180deg,#090909 0%,#050505 100%)}
        .container{width:min(1220px,calc(100% - 40px));margin:0 auto}
        .cart-fab{position:fixed;right:24px;top:24px;z-index:50;display:inline-flex;align-items:center;gap:12px;padding:12px 16px;border-radius:18px;border:1px solid rgba(255,255,255,0.1);background:rgba(12,12,12,0.82);color:#fff6df;backdrop-filter:blur(18px);box-shadow:0 18px 40px rgba(0,0,0,0.3);cursor:pointer}.cart-badge{min-width:24px;height:24px;padding:0 8px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;font-size:12px;font-weight:700}
        .hero{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.08);padding:72px 0 52px}.hero:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg, rgba(255,255,255,0.03) 0%, transparent 35%),linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.56));pointer-events:none}
        .hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.08fr 0.92fr;gap:34px;align-items:center}.eyebrow{display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border:1px solid rgba(212,175,55,0.35);border-radius:999px;background:rgba(255,255,255,0.03);color:#e6c874;font-size:11px;letter-spacing:.32em;text-transform:uppercase;margin-bottom:22px;backdrop-filter:blur(14px)}
        .hero h1{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,74px);line-height:.96;margin:0;letter-spacing:-.03em;max-width:760px;color:#fff8ec}.hero p{max-width:700px;margin:24px 0 0;color:rgba(255,245,225,.74);font-size:18px;line-height:1.82}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.button-primary,.button-secondary{border-radius:18px;padding:14px 22px;font-weight:600;font-size:14px;transition:transform .2s ease}.button-primary{background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;box-shadow:0 18px 40px rgba(212,175,55,.18)}.button-secondary{color:rgba(255,255,255,.92);border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03)}
        .hero-visual{min-height:560px;border-radius:34px;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:radial-gradient(circle at 20% 20%, rgba(212,175,55,.16), transparent 26%),linear-gradient(135deg,#121212 0%,#171717 38%,#0a0a0a 100%);box-shadow:0 30px 60px rgba(0,0,0,.35);padding:28px}.hero-visual:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg, rgba(255,255,255,.02), transparent 45%),radial-gradient(circle at 75% 28%, rgba(255,255,255,.06), transparent 18%)}.hero-pill{position:relative;z-index:2;display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:999px;border:1px solid rgba(212,175,55,.28);background:rgba(255,255,255,.03);color:#f0d98c;font-size:11px;letter-spacing:.24em;text-transform:uppercase}.hero-dot{width:8px;height:8px;border-radius:999px;background:linear-gradient(135deg,#d4af37,#f0d98c);box-shadow:0 0 16px rgba(212,175,55,.4)}.hero-stack{position:relative;z-index:2;display:grid;grid-template-columns:1.08fr .92fr;gap:18px;align-items:end;margin-top:18px}.hero-main-card,.hero-side-card,.hero-bottom-card{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 45px rgba(0,0,0,.28);background:rgba(0,0,0,.12)}.hero-main-card{height:396px;border-radius:30px}.hero-side-card{height:188px;border-radius:24px}.hero-bottom-card{height:188px;border-radius:24px;margin-top:18px}.hero-main-card img,.hero-side-card img,.hero-bottom-card img{width:100%;height:100%;object-fit:cover;display:block}.hero-card-overlay{position:absolute;inset:auto 14px 14px 14px;z-index:2;display:flex;justify-content:space-between;align-items:center}.hero-card-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(0,0,0,.42);border:1px solid rgba(255,255,255,.1);padding:8px 12px;border-radius:999px;color:#fff6df;font-size:11px;letter-spacing:.16em;text-transform:uppercase;backdrop-filter:blur(10px)}.hero-mini-copy{margin-top:18px;position:relative;z-index:2;color:rgba(255,245,225,.74);font-size:14px;line-height:1.8;padding-right:12px}
        .stats{margin-top:26px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.stat{border:1px solid rgba(255,255,255,.08);border-radius:22px;background:rgba(255,255,255,.04);padding:20px}.stat-title{color:#dfc06b;font-size:11px;text-transform:uppercase;letter-spacing:.28em;margin-bottom:10px}.stat-text{color:rgba(255,245,225,.72);line-height:1.7;font-size:14px;margin:0}
        .section{padding:72px 0}.section-header{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:30px}.section-kicker{color:#dfc06b;text-transform:uppercase;letter-spacing:.28em;font-size:12px;margin-bottom:12px}.section-title{font-family:'Playfair Display',serif;font-size:44px;margin:0;color:#fff7e8}.section-desc{max-width:520px;color:rgba(255,245,225,.64);line-height:1.8;margin:0}
        .filters{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:26px}.filter{border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.03);color:rgba(255,245,225,.72);border-radius:999px;padding:10px 16px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;cursor:pointer}.filter.active{border-color:rgba(212,175,55,.55);background:linear-gradient(135deg, rgba(212,175,55,.22), rgba(212,175,55,.08));color:#f0d98c}
        .products-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.card{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.08);border-radius:30px;overflow:hidden;box-shadow:0 20px 45px rgba(0,0,0,.24)}.card-image{position:relative;height:340px;background:#111;overflow:hidden}.card-image img{width:100%;height:100%;object-fit:contain;display:block;background:#0d0d0d;padding:14px;cursor:pointer}.card-image:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,.02), rgba(0,0,0,.66))}.card-badge{position:absolute;left:18px;top:18px;z-index:1;border-radius:999px;padding:8px 12px;background:rgba(0,0,0,.45);border:1px solid rgba(212,175,55,.35);color:#eed27d;font-size:10px;letter-spacing:.22em;text-transform:uppercase;backdrop-filter:blur(10px)}.card-image-content{position:absolute;left:20px;right:20px;bottom:20px;z-index:1}
        .image-zoom-btn{position:absolute;right:16px;top:16px;z-index:3;width:42px;height:42px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(0,0,0,.48);color:#fff6df;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(10px);font-size:18px}.price{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:8px}.product-name{margin:0;font-size:29px;line-height:1.08;color:#fff8ea;font-family:'Playfair Display',serif}.card-body{padding:24px}.tagline{color:#eed27d;font-size:15px;font-weight:600;line-height:1.6}.description{margin-top:12px;color:rgba(255,245,225,.72);line-height:1.8;font-size:14px}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.chip{border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.03);border-radius:999px;padding:8px 12px;font-size:12px;color:rgba(255,245,225,.72)}
        .details-button,.add-cart-btn{margin-top:12px;width:100%;border-radius:16px;padding:13px 16px;font-size:14px;font-weight:700;cursor:pointer}.details-button{border:1px solid rgba(212,175,55,.35);color:#eed27d;background:transparent}.add-cart-btn{border:none;background:linear-gradient(135deg,#d4af37,#f0d98c);color:#111;box-shadow:0 16px 30px rgba(212,175,55,.16)}.details{margin-top:18px;padding:18px;border-radius:22px;border:1px solid rgba(255,255,255,.08);background:rgba(0,0,0,.22)}.detail-item{color:rgba(255,245,225,.76);line-height:1.7;margin-bottom:10px;font-size:14px}.specs{display:grid;gap:14px;margin-top:16px;padding:16px;border-radius:18px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.025)}.spec-label{color:#eed27d;text-transform:uppercase;letter-spacing:.2em;font-size:10px;margin-bottom:6px}.spec-value{color:rgba(255,245,225,.72);line-height:1.8;font-size:14px}.note{margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);color:rgba(255,245,225,.65);font-style:italic;line-height:1.8;font-size:14px}
        .variant-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:24px}.variant-card{background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.025));border:1px solid rgba(255,255,255,.08);border-radius:30px;overflow:hidden;box-shadow:0 20px 45px rgba(0,0,0,.24)}.variant-visual{height:280px;position:relative}.variant-visual img{width:100%;height:100%;object-fit:contain;display:block;background:#0d0d0d;padding:14px;cursor:pointer}.variant-content{padding:24px}.variant-select{width:100%;padding:14px 16px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:#fff6df;margin-top:10px;appearance:none}.variant-price{font-family:'Playfair Display',serif;font-size:34px;color:#fff7e8;margin-top:16px}
        .feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.feature-card,.testimonial-card,.payment-card,.social-card,.contact-card{padding:28px;border-radius:28px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03)}.feature-card h3,.payment-card h3,.social-card h3,.contact-card h3{margin:12px 0 0;font-family:'Playfair Display',serif;font-size:30px;color:#fff7e8}.feature-card p,.testimonial-card p,.payment-card p,.social-card p,.contact-card p{color:rgba(255,245,225,.68);line-height:1.8;font-size:14px;margin-top:14px}.testimonial-card h4{margin:0 0 10px;color:#f0d98c;font-size:12px;letter-spacing:.18em;text-transform:uppercase}
        .footer-cta{text-align:center;border-top:1px solid rgba(255,255,255,.08);padding:76px 0}.footer-cta h3{max-width:920px;margin:14px auto 0;font-family:'Playfair Display',serif;font-size:clamp(34px,5vw,54px);line-height:1.06;color:#fff7e8}.footer-cta p{max-width:760px;margin:22px auto 0;color:rgba(255,245,225,.65);line-height:1.9;font-size:15px}.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding:24px 0 38px;color:rgba(255,245,225,.42);font-size:14px}.footer-bottom .container{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.footer-col-title{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:10px}.footer-col-text{line-height:1.8;color:rgba(255,245,225,.62)}
        .cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,.46);z-index:60}.cart-panel{position:fixed;top:0;right:0;width:min(430px,100%);height:100vh;z-index:61;background:linear-gradient(180deg,#0f0f0f,#090909);border-left:1px solid rgba(255,255,255,.08);box-shadow:-20px 0 50px rgba(0,0,0,.35);padding:24px;overflow-y:auto}.cart-header{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px}.cart-title{font-family:'Playfair Display',serif;font-size:34px;color:#fff7e8;margin:0}.cart-close{background:transparent;border:1px solid rgba(255,255,255,.12);color:#fff6df;border-radius:14px;padding:10px 14px;cursor:pointer}.cart-empty{color:rgba(255,245,225,.68);line-height:1.9;font-size:15px;padding:12px 0 28px}.cart-item{border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);border-radius:22px;padding:14px;display:grid;grid-template-columns:82px 1fr;gap:14px;margin-bottom:14px}.cart-item img{width:82px;height:96px;object-fit:cover;border-radius:16px;display:block}.cart-item h4{margin:0;color:#fff6df;font-size:18px;font-family:'Playfair Display',serif}.cart-item-price{color:#eed27d;font-size:12px;letter-spacing:.16em;text-transform:uppercase;margin-top:6px}.cart-qty{display:flex;align-items:center;gap:10px;margin-top:12px}.cart-qty button{width:30px;height:30px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);color:#fff6df;cursor:pointer}.remove-btn{margin-top:10px;border:none;background:transparent;color:rgba(255,245,225,.58);cursor:pointer;padding:0}.checkout-box{margin-top:22px;padding:18px;border-radius:24px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03)}.checkout-label{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:10px}.checkout-total{font-family:'Playfair Display',serif;font-size:36px;color:#fff7e8;margin:8px 0 18px}.checkout-input{width:100%;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.08);background:rgba(0,0,0,.18);color:#fff6df;margin-bottom:10px;font-size:14px}.checkout-note{color:rgba(255,245,225,.62);font-size:13px;line-height:1.8;margin-bottom:14px}.payment-box{margin-top:14px;padding:14px;border-radius:18px;background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.06)}.payment-title{color:#eed27d;font-size:11px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:8px}.payment-text{color:rgba(255,245,225,.72);font-size:14px;line-height:1.8}.cart-checkout-btn{display:block;text-align:center;margin-top:14px}
        .image-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:80;display:flex;align-items:center;justify-content:center;padding:28px}
        .image-modal-box{position:relative;max-width:min(92vw,1100px);max-height:90vh;width:100%;border:1px solid rgba(255,255,255,.1);border-radius:26px;background:#0b0b0b;box-shadow:0 30px 80px rgba(0,0,0,.45);padding:22px}
        .image-modal-box img{width:100%;max-height:78vh;object-fit:contain;display:block}
        .image-modal-close{position:absolute;top:16px;right:16px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);color:#fff6df;border-radius:14px;padding:10px 14px;cursor:pointer}
        .image-helper{margin-top:10px;color:rgba(255,245,225,.6);font-size:12px;line-height:1.6;text-align:center}
        @media (max-width:1080px){.hero-grid,.products-grid,.feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid,.stats,.variant-grid,.footer-bottom .container{grid-template-columns:1fr 1fr}.hero-visual{min-height:520px}.hero-stack{grid-template-columns:1fr 1fr}.hero-main-card{height:320px}.hero-side-card,.hero-bottom-card{height:154px}}
        @media (max-width:820px){.hero-grid,.products-grid,.feature-grid,.testimonials-grid,.payments-grid,.social-grid,.contact-grid,.stats,.variant-grid,.section-header,.footer-bottom .container{grid-template-columns:1fr;display:grid}.section-header{align-items:start}.hero{padding-top:52px}.hero-visual{min-height:520px}.hero-stack{grid-template-columns:1fr;margin-top:18px}.hero-main-card{height:280px}.hero-side-card{height:170px}.hero-bottom-card{height:170px}.hero-mini-copy{position:relative;margin-top:18px}.section-title{font-size:34px}.card-image{height:300px}.feature-card h3,.payment-card h3,.social-card h3,.contact-card h3{font-size:24px}.cart-fab{right:14px;top:14px}.cart-panel{width:100%}}
      `}</style>

      <div className="page">
        <button className="cart-fab" onClick={() => setIsCartOpen(true)}>
          Carrito <span className="cart-badge">{cartCount}</span>
        </button>

        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">✦ UINK Luxe Store</div>
              <h1>
                Donde la técnica, la elegancia y la precisión se convierten en
                lujo profesional.
              </h1>
              <p>
                Una selección creada para lashistas que no solo buscan
                productos, sino herramientas que eleven su trabajo, su presencia
                y la experiencia que entregan en cada set.
              </p>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href={whatsappBase}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a className="button-secondary" href="#catalogo">
                  Ver catálogo
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="stat-title">Adhesivos</div>
                  <p className="stat-text">
                    Fórmulas pensadas para distintos ritmos, climas y niveles de
                    experiencia.
                  </p>
                </div>
                <div className="stat">
                  <div className="stat-title">Lash Essentials</div>
                  <p className="stat-text">
                    Complementos y herramientas que mejoran retención, limpieza
                    y precisión.
                  </p>
                </div>
                <div className="stat">
                  <div className="stat-title">Fibras</div>
                  <p className="stat-text">
                    Opciones clásicas y tecnológicas para sets naturales,
                    modernos y de alto impacto.
                  </p>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-pill">
                <span className="hero-dot"></span> Lash essentials seleccionados
              </div>
              <div className="hero-stack">
                <div className="hero-main-card">
                  <img
                    src="https://i.imgur.com/HmuYh3m.jpeg"
                    alt="Volume Pro"
                  />
                  <div className="hero-card-overlay">
                    <span className="hero-card-tag">Volume Pro</span>
                  </div>
                </div>
                <div>
                  <div className="hero-side-card">
                    <img src="https://i.imgur.com/TYHejp5.jpeg" alt="Boonder" />
                    <div className="hero-card-overlay">
                      <span className="hero-card-tag">Boonder</span>
                    </div>
                  </div>
                  <div className="hero-bottom-card">
                    <img
                      src="https://i.imgur.com/uiwOHzX.jpeg"
                      alt="Removedor"
                    />
                    <div className="hero-card-overlay">
                      <span className="hero-card-tag">Removedor</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-mini-copy">
                Descubre una selección pensada para lashistas que buscan
                rendimiento, estética de marca y una experiencia de compra más
                clara desde la primera pantalla.
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="catalogo">
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-kicker">Catálogo</div>
                <h2 className="section-title">Productos UINK</h2>
              </div>
              <p className="section-desc">
                Una presentación web diseñada para mostrar la esencia de la
                marca con una estética editorial, moderna y lista para
                evolucionar hacia una tienda funcional.
              </p>
            </div>
            <div className="filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveFilter(filter);
                    setOpenIndex(null);
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="products-grid">
              {filteredProducts.length === 0 ? (
                <div className="feature-card" style={{ gridColumn: "1 / -1" }}>
                  <div className="section-kicker" style={{ marginBottom: 0 }}>
                    Sin productos fijos
                  </div>
                  <h3 style={{ marginTop: 12 }}>
                    Esta categoría se presenta en la sección correspondiente
                  </h3>
                  <p>
                    {activeFilter === "Pinzas"
                      ? "Las pinzas se muestran más abajo en una sección exclusiva para referencias y modelos, para que la experiencia sea más clara y ordenada."
                      : activeFilter === "Pestañas"
                      ? "Las pestañas se muestran más abajo en una sección exclusiva con variantes, longitudes, grosores y efectos para una compra más ordenada."
                      : "Esta categoría se muestra en otra sección de la página para evitar repetir productos innecesariamente."}
                  </p>
                </div>
              ) : (
                filteredProducts.map((product, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <article className="card" key={product.name}>
                      <div className="card-image">
                        <img
                          src={product.image}
                          alt={product.name}
                          title="Ver imagen completa"
                          style={{ cursor: "default" }}
                        />
                        <button
                          className="image-zoom-btn"
                          onClick={() =>
                            setSelectedImage({
                              src: product.image,
                              alt: product.name,
                            })
                          }
                          title="Ampliar imagen"
                        >
                          ⌕
                        </button>
                        <div className="card-badge">{product.category}</div>
                        <div className="card-image-content">
                          <div className="price">{product.priceLabel}</div>
                          <h3 className="product-name">{product.name}</h3>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="tagline">{product.tagline}</div>
                        <div className="description">{product.description}</div>
                        <div className="chips">
                          {product.bullets.slice(0, 2).map((item) => (
                            <span className="chip" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                        <button
                          className="details-button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                          {isOpen ? "Ocultar detalles" : "Ver detalles"}
                        </button>
                        <button
                          className="add-cart-btn"
                          onClick={() => addToCart({ ...product, quantity: 1 })}
                        >
                          Añadir al carrito
                        </button>
                        {isOpen && (
                          <div className="details">
                            {product.bullets.map((item) => (
                              <div className="detail-item" key={item}>
                                ✦ {item}
                              </div>
                            ))}
                            {product.specs && (
                              <div className="specs">
                                {Object.entries(product.specs).map(
                                  ([label, value]) => (
                                    <div key={label}>
                                      <div className="spec-label">{label}</div>
                                      <div className="spec-value">{value}</div>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                            <div className="note">{product.note}</div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {showVariantsSection && (
          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-kicker">Pestañas y variantes</div>
                  <h2 className="section-title">Selecciona tu versión ideal</h2>
                </div>
                <p className="section-desc">
                  {activeFilter === "Pinzas"
                    ? "Explora las referencias de pinzas disponibles sin mezclar la experiencia con las pestañas."
                    : activeFilter === "Pestañas"
                    ? "Todas las pestañas con opciones reales para elegir longitud, grosor, efecto o curva sin saturar la tienda con productos repetidos."
                    : "Pestañas y pinzas con opciones reales para elegir la referencia exacta sin repetir demasiados productos en el catálogo principal."}
                </p>
              </div>
              <div className="variant-grid">
                {(activeFilter === "Todos" || activeFilter === "Pestañas") && (
                  <>
                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={classicLashes.image}
                          alt={classicLashes.name}
                          onClick={() =>
                            setSelectedImage({
                              src: classicLashes.image,
                              alt: classicLashes.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pestañas</div>
                        <h3 className="product-name">{classicLashes.name}</h3>
                        <div className="description">
                          {classicLashes.description}
                        </div>
                        <select
                          className="variant-select"
                          value={classicLength}
                          onChange={(e) => setClassicLength(e.target.value)}
                        >
                          {classicLashes.lengths.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <select
                          className="variant-select"
                          value={classicThickness}
                          onChange={(e) => setClassicThickness(e.target.value)}
                        >
                          {classicLashes.thickness.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <div className="variant-price">
                          $ {classicLashes.priceValue.toLocaleString("es-CO")}{" "}
                          COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: classicLashes.name,
                              variant: `${classicLength} / ${classicThickness}`,
                              priceValue: classicLashes.priceValue,
                              image: classicLashes.image,
                              cartKey: `classic-${classicLength}-${classicThickness}`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>

                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={fibrasTech.image}
                          alt={fibrasTech.name}
                          onClick={() =>
                            setSelectedImage({
                              src: fibrasTech.image,
                              alt: fibrasTech.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pestañas</div>
                        <h3 className="product-name">{fibrasTech.name}</h3>
                        <div className="description">
                          {fibrasTech.description}
                        </div>
                        <select
                          className="variant-select"
                          value={techEffect}
                          onChange={(e) => setTechEffect(e.target.value)}
                        >
                          {Object.keys(fibrasTech.effectPrices).map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <select
                          className="variant-select"
                          value={techLength}
                          onChange={(e) => setTechLength(e.target.value)}
                        >
                          {fibrasTech.lengths.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <select
                          className="variant-select"
                          value={techThickness}
                          onChange={(e) => setTechThickness(e.target.value)}
                        >
                          {fibrasTech.thickness.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <div className="variant-price">
                          ${" "}
                          {fibrasTech.effectPrices[techEffect].toLocaleString(
                            "es-CO"
                          )}{" "}
                          COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: fibrasTech.name,
                              variant: `${techEffect} / ${techLength} / ${techThickness}`,
                              priceValue: fibrasTech.effectPrices[techEffect],
                              image: fibrasTech.image,
                              cartKey: `tech-${techEffect}-${techLength}-${techThickness}`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>

                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={fibrasU.image}
                          alt={fibrasU.name}
                          onClick={() =>
                            setSelectedImage({
                              src: fibrasU.image,
                              alt: fibrasU.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pestañas</div>
                        <h3 className="product-name">{fibrasU.name}</h3>
                        <div className="description">{fibrasU.description}</div>
                        <select
                          className="variant-select"
                          value={uEffect}
                          onChange={(e) => setUEffect(e.target.value)}
                        >
                          {Object.keys(fibrasU.effectPrices).map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <select
                          className="variant-select"
                          value={uLength}
                          onChange={(e) => setULength(e.target.value)}
                        >
                          {fibrasU.lengths.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <select
                          className="variant-select"
                          value={uThickness}
                          onChange={(e) => setUThickness(e.target.value)}
                        >
                          {fibrasU.thickness.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <div className="variant-price">
                          ${" "}
                          {fibrasU.effectPrices[uEffect].toLocaleString(
                            "es-CO"
                          )}{" "}
                          COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: fibrasU.name,
                              variant: `${uEffect} / ${uLength} / ${uThickness}`,
                              priceValue: fibrasU.effectPrices[uEffect],
                              image: fibrasU.image,
                              cartKey: `u-${uEffect}-${uLength}-${uThickness}`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>

                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={efectosEspeciales.image}
                          alt={efectosEspeciales.name}
                          onClick={() =>
                            setSelectedImage({
                              src: efectosEspeciales.image,
                              alt: efectosEspeciales.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pestañas</div>
                        <h3 className="product-name">
                          {efectosEspeciales.name}
                        </h3>
                        <div className="description">
                          {efectosEspeciales.description}
                        </div>
                        <select
                          className="variant-select"
                          value={especialEffect}
                          onChange={(e) => setEspecialEffect(e.target.value)}
                        >
                          {Object.keys(efectosEspeciales.effectPrices).map(
                            (v) => (
                              <option key={v}>{v}</option>
                            )
                          )}
                        </select>
                        <select
                          className="variant-select"
                          value={especialCurve}
                          onChange={(e) => setEspecialCurve(e.target.value)}
                        >
                          {efectosEspeciales.curves.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <div className="variant-price">
                          ${" "}
                          {efectosEspeciales.effectPrices[
                            especialEffect
                          ].toLocaleString("es-CO")}{" "}
                          COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: efectosEspeciales.name,
                              variant: `${especialEffect} / MIX / 0.07 / Curva ${especialCurve}`,
                              priceValue:
                                efectosEspeciales.effectPrices[especialEffect],
                              image: efectosEspeciales.image,
                              cartKey: `esp-${especialEffect}-${especialCurve}`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {(activeFilter === "Todos" || activeFilter === "Pinzas") && (
                  <>
                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={pinzasEmma.image}
                          alt={pinzasEmma.name}
                          onClick={() =>
                            setSelectedImage({
                              src: pinzasEmma.image,
                              alt: pinzasEmma.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pinzas</div>
                        <h3 className="product-name">{pinzasEmma.name}</h3>
                        <div className="description">
                          {pinzasEmma.description}
                        </div>
                        <select
                          className="variant-select"
                          value={pinzaModel}
                          onChange={(e) => setPinzaModel(e.target.value)}
                        >
                          {pinzasEmma.models.map((v) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                        <div className="variant-price">
                          $ {pinzasEmma.priceValue.toLocaleString("es-CO")} COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: pinzasEmma.name,
                              variant: pinzaModel,
                              priceValue: pinzasEmma.priceValue,
                              image: pinzasEmma.image,
                              cartKey: `pinza-emma-${pinzaModel}`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>

                    <div className="variant-card">
                      <div className="variant-visual">
                        <img
                          src={pinzaPink.image}
                          alt={pinzaPink.name}
                          onClick={() =>
                            setSelectedImage({
                              src: pinzaPink.image,
                              alt: pinzaPink.name,
                            })
                          }
                          title="Ver imagen completa"
                          style={{ cursor: "zoom-in" }}
                        />
                      </div>
                      <div className="variant-content">
                        <div className="section-kicker">Pinzas</div>
                        <h3 className="product-name">{pinzaPink.name}</h3>
                        <div className="description">
                          {pinzaPink.description}
                        </div>
                        <div className="chips">
                          {pinzaPink.bullets.slice(0, 3).map((item) => (
                            <span className="chip" key={item}>
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="variant-price">
                          $ {pinzaPink.priceValue.toLocaleString("es-CO")} COP
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() =>
                            addToCart({
                              name: pinzaPink.name,
                              priceValue: pinzaPink.priceValue,
                              image: pinzaPink.image,
                              cartKey: `pinza-pink`,
                            })
                          }
                        >
                          Añadir al carrito
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container feature-grid">
            <div className="feature-card">
              <div className="section-kicker" style={{ marginBottom: 0 }}>
                Beneficio
              </div>
              <h3>Compra asistida</h3>
              <p>
                La clienta puede explorar, elegir y finalizar su pedido
                directamente por WhatsApp con el resumen listo.
              </p>
            </div>
            <div className="feature-card">
              <div className="section-kicker" style={{ marginBottom: 0 }}>
                Beneficio
              </div>
              <h3>Asesoría real</h3>
              <p>
                Guiamos la elección del adhesivo, la fibra o el complemento
                ideal según ritmo, técnica y ambiente de trabajo.
              </p>
            </div>
            <div className="feature-card">
              <div className="section-kicker" style={{ marginBottom: 0 }}>
                Beneficio
              </div>
              <h3>Envíos y atención</h3>
              <p>
                Atención personalizada, métodos de pago fáciles y coordinación
                de pedidos para todo Bogotá y otras ciudades.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-kicker">Confianza</div>
                <h2 className="section-title">Lo que dicen lashistas</h2>
              </div>
              <p className="section-desc">
                Una marca no solo se ve bien: también se siente en la mesa de
                trabajo, en la retención y en la experiencia final.
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <div className="testimonial-card" key={t.name}>
                  <h4>{t.name}</h4>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-kicker">Pagos</div>
                <h2 className="section-title">Métodos de pago</h2>
              </div>
              <p className="section-desc">
                Opciones rápidas y coordinadas directamente con asesoría para
                facilitar el cierre del pedido.
              </p>
            </div>
            <div className="payments-grid">
              <div className="payment-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Nequi
                </div>
                <h3>Pago inmediato</h3>
                <p>@BBORH451 Oscar Ramirez</p>
              </div>
              <div className="payment-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Daviplata
                </div>
                <h3>Transferencia</h3>
                <p>@BBORH451 Oscar Ramirez</p>
              </div>
              <div className="payment-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Bancos / Bre B
                </div>
                <h3>Cuenta coordinada</h3>
                <p>@BBORH451 Oscar Ramirez</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-kicker">Redes</div>
                <h2 className="section-title">Conecta con UINK</h2>
              </div>
              <p className="section-desc">
                Más contenido, marca, comunidad y confianza desde nuestros
                canales oficiales.
              </p>
            </div>
            <div className="social-grid">
              <a
                className="social-card"
                href="https://www.instagram.com/uinklashpro"
                target="_blank"
                rel="noreferrer"
              >
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Instagram
                </div>
                <h3>@uinklashpro</h3>
                <p>
                  Conoce novedades, productos, contenidos de marca y actualidad
                  del mundo lash.
                </p>
              </a>
              <a
                className="social-card"
                href="https://www.tiktok.com/@uinklashpro"
                target="_blank"
                rel="noreferrer"
              >
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  TikTok
                </div>
                <h3>@uinklashpro</h3>
                <p>
                  Videos, demostraciones, tendencias, behind the scenes y
                  contenido visual de alto impacto.
                </p>
              </a>
              <a
                className="social-card"
                href={whatsappBase}
                target="_blank"
                rel="noreferrer"
              >
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  WhatsApp
                </div>
                <h3>Asesoría directa</h3>
                <p>
                  Resuelve dudas, arma tu pedido y confirma pagos o dirección de
                  entrega en un solo lugar.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-kicker">Ubicación</div>
                <h2 className="section-title">Información de contacto</h2>
              </div>
              <p className="section-desc">
                Todo lo necesario para ubicar, escribir o coordinar una compra
                con UINK.
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Dirección
                </div>
                <h3>Bogotá D.C.</h3>
                <p>Calle 27 Sur 11A - 65</p>
              </div>
              <div className="contact-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  Horario
                </div>
                <h3>Atención</h3>
                <p>08:00 AM a 07:00 PM</p>
              </div>
              <div className="contact-card">
                <div className="section-kicker" style={{ marginBottom: 0 }}>
                  WhatsApp
                </div>
                <h3>301 343 9680</h3>
                <p>
                  Para confirmar pedido, dirección, pago y asesoría
                  personalizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-cta">
          <div className="container">
            <div className="section-kicker">UINK Luxe Store</div>
            <h3>
              Productos creados para lashistas que quieren trabajar con más
              seguridad, presencia y nivel.
            </h3>
            <p>
              Escríbenos y recibe asesoría para elegir el adhesivo, las fibras o
              el complemento ideal según tu ritmo, técnica y ambiente de
              trabajo.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a
                className="button-primary"
                href={whatsappBase}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="footer-bottom">
          <div className="container">
            <div>
              <div className="footer-col-title">Marca</div>
              <div className="footer-col-text">
                UINK Luxe Store
                <br />
                Estética Integral
              </div>
            </div>
            <div>
              <div className="footer-col-title">Ubicación</div>
              <div className="footer-col-text">
                Bogotá D.C.
                <br />
                Calle 27 Sur 11A - 65
              </div>
            </div>
            <div>
              <div className="footer-col-title">Horario</div>
              <div className="footer-col-text">08:00 AM a 07:00 PM</div>
            </div>
            <div>
              <div className="footer-col-title">Pagos</div>
              <div className="footer-col-text">
                Nequi / Daviplata / Bancos o Bre B<br />
                @BBORH451 Oscar Ramirez
              </div>
            </div>
          </div>
        </footer>

        {isCartOpen && (
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
        )}
        {selectedImage && (
          <div
            className="image-modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="image-modal-box"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="image-modal-close"
                onClick={() => setSelectedImage(null)}
              >
                Cerrar
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="image-helper">
                Vista completa de producto · {selectedImage.alt}
              </div>
            </div>
          </div>
        )}

        {isCartOpen && (
          <aside className="cart-panel">
            <div className="cart-header">
              <h3 className="cart-title">Tu carrito</h3>
              <button
                className="cart-close"
                onClick={() => setIsCartOpen(false)}
              >
                Cerrar
              </button>
            </div>
            {!cart.length ? (
              <div className="cart-empty">
                Aún no has agregado productos. Explora el catálogo y arma tu
                pedido para enviarlo por WhatsApp.
              </div>
            ) : (
              <>
                {cart.map((item) => {
                  const key = item.cartKey || item.name;
                  return (
                    <div className="cart-item" key={key}>
                      <img
                        src={item.image}
                        alt={item.name}
                        onClick={() =>
                          setSelectedImage({ src: item.image, alt: item.name })
                        }
                        title="Ver imagen completa"
                        style={{ cursor: "zoom-in" }}
                      />
                      <div>
                        <h4>{item.name}</h4>
                        {item.variant && (
                          <div className="description" style={{ marginTop: 6 }}>
                            {item.variant}
                          </div>
                        )}
                        <div className="cart-item-price">
                          $ {item.priceValue.toLocaleString("es-CO")} COP
                        </div>
                        <div className="cart-qty">
                          <button onClick={() => changeQuantity(key, -1)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => changeQuantity(key, 1)}>
                            +
                          </button>
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(key)}
                        >
                          Quitar
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="checkout-box">
                  <div className="checkout-label">Resumen</div>
                  <div className="checkout-total">
                    $ {cartTotal.toLocaleString("es-CO")} COP
                  </div>
                  <input
                    className="checkout-input"
                    placeholder="Tu nombre"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  <input
                    className="checkout-input"
                    placeholder="Tu ciudad"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                  />
                  <input
                    className="checkout-input"
                    placeholder="Tu dirección"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />
                  <div className="checkout-note">
                    El pedido se enviará por WhatsApp con los productos,
                    variantes, cantidades, dirección y total estimado. Luego
                    solo confirmas el pedido y adjuntas el comprobante de pago.
                  </div>
                  <div className="payment-box">
                    <div className="payment-title">Métodos de pago</div>
                    <div className="payment-text">
                      Nequi, Daviplata o Bancos / Bre B coordinado por asesoría.
                      Flujo pensado para cerrar rápido y confirmar entrega sin
                      perder el control de la venta.
                    </div>
                  </div>
                  <a
                    className="button-primary cart-checkout-btn"
                    href={checkoutMessage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Finalizar pedido por WhatsApp
                  </a>
                </div>
              </>
            )}
          </aside>
        )}
      </div>
    </>
  );
}
