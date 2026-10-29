(()=>{
const WA="212677908806";
const FLAGS={fr:"fr",ar:"ma",en:"gb",es:"es"},LN={fr:"Français",ar:"العربية",en:"English",es:"Español"};

/* ---------- Tarifs (réels, issus du menu) : "Nom|prix|note|p" (p = à partir de) ---------- */
const S=(a)=>a.map(s=>{const[x,y,z,f]=s.split("|");return{n:x,p:+y,d:z||"",f:!!f}});
const CATS=[
{id:"mani",imgs:["pedi","hands"],g:[
 {t:"Manucure",i:S(["Manucure Normal|70|Limage, cuticules, sérum, crème hydratante","Manucure Spa|100|Eau tiède sels minéraux, limage, gommage, massage, sérum cuticule","Manucure Russe (avec machine)|100","Manucure Royal (avec paraffine)|200|Gommage rituel, masque éclaircissant, paraffine chaude, massage extra relaxation","Manucure Profond (gamme Herome)|250|Gommage profond, masque et crème éclaircissants, sérum cuticule","Manucure Medical (ongles malades au champignon)|300|Extra désinfection avec une gamme médicale et outils spéciaux"])},
 {t:"Pédicure",i:S(["Pédicure Normal|100|Limage, cuticules, sérum, crème hydratante","Pédicure Spa|180|Eau tiède sels minéraux, limage, peau morte, gommage, massage","Pédicure Russe (avec machine)|100","Pédicure Royal (avec paraffine)|250|Gommage rituel, gel mousse, masque éclaircissant, paraffine chaude, massage extra relaxation","Pédicure Profond (gamme Herome)|250|Gommage profond, masque et crème éclaircissants, sérum cuticule","Pédicure Medical (ongles malades au champignon)|300|Extra désinfection avec une gamme médicale et outils spéciaux","Jelly Pédicure – bain de gélatine (exfoliant de profondeur)|350|Limage, peau morte, cuticules, gommage, massage, sérum"])},
 {t:"EXTRA",i:S(["Paraffine des mains|30","Paraffine des pieds|40","Sérum Herome mains/pieds|30"])}]},
{id:"ongl",imgs:["nails","pedi"],g:[
 {t:"Onglerie",i:S(["Pose vernis normal O.P.I Vegan|60","Pose vernis French O.P.I Vegan|100","Pose Biab We-Care Semilac|200","Pose Biab French / Baby Boomer We Care Semilac|250","Extension capsule + Biab We Care Semilac|300","Extension capsule + French / Baby Boomer We Care Semilac|350","Remplissage Biab We Care Semilac|100||p","Pose permanent couleur|100","Pose permanent French Baby Boomer|50","Faux ongles permanent|200"])},
 {t:"EXTRA",i:S(["Nail art|10||p","Dépose permanent (avec hydratation cuticule)|50","Dépose acrylique, gel|100","Réparation ongle cassé|20","Ongle décollé (+48h)|10"])}]},
{id:"visage",imgs:["face","facemassage"],g:[
 {t:"Soin visage / corps",i:S(["Soin visage profond spécifique|500|Nettoyage, exfoliation, extraction points noirs, dermaplaning, lifting anti-âge, cocktail de vitamines, gua sha, masques spéciaux, massage glacé, haute fréquence, luminothérapie","Soin visage profond moyen gamme|350|Nettoyage, exfoliation, extraction points noirs, modelage, masque, hydratation, éclat","Soin visage naturel|500|Produits et masques naturels à base d'extraits de plantes, vapeur, gua sha, luminothérapie, massage glacé, haute fréquence","Mini soin normal|200|Démaquillage, nettoyage, gommage, masque, modelage (10 min)","Peeling (aux algues marines)|700","Microneedling (machine Dr.Pen) – /une séance|700|Sérums spécifiques · résultat dans 4-8 séances","Modelage visage|100|Éclat, hydratant et anti-âge (20 min)","Modelage yeux|50|20 min","Soin du dos|390|Nettoyage, gommage anti-acné, extraction, masque à l'argile pure, haute fréquence, hydratation, massage relaxant (10 min)","Gommage pied – peau d'oie|150|Avec extraction des points noirs"])},
 {t:"EXTRA",i:S(["Dermaplaning|50","Masque à la gélatine|50","Masque tissu|70"])}]},
{id:"hair",imgs:["straight","wavy","blonde","updo"],g:[
 {t:"Lissage",i:S(["Lissage protéine organic|800||p"])},
 {t:"Soin de bain",i:S(["Baño de crema hydratant|150||p","Soin réparateur cheveux cassés|250||p","Rinçage d'effacer couleur orange|350||p","Soin d'enlever les pellicules des cheveux|400||p"])},
 {t:"Shampoing",i:S(["Shampoing sans sulfate|30","Shampoing mauve anti-orange (cheveux blonds, colorés)|40","Shampoing + massage (10 min)|50"])},
 {t:"Coloration",i:S(["Coloration végan (végétale)|300||p"])},
 {t:"Les coupes",i:S(["Coupe de longueur|40||p","Enlever les pointes fourchues avec machine|100"])},
 {t:"Brushing",i:S(["Touching|20","Brushing simple|30||p","Brushing bouclé|40||p","Lisseur|50||p"])},
 {t:"Coiffure",i:S(["Chignon / style cheveux|150||p","Babyliss|100||p"])}]},
{id:"cils",imgs:["lashes","lamination"],g:[
 {t:"Cils",i:S(["Lamination cils|250","Extension cils normal|100","Remplissage cils normal|50","Extension cils permanent|350||p","Remplissage cils permanent|100","Dépose cils|50"])},
 {t:"Sourcils",i:S(["Lamination sourcils|250","Coloration sourcils|50","Décoloration des poils excès|50"])}]},
{id:"epil",imgs:["thread","orchid"],g:[
 {t:"Épilation",i:S(["Sourcils (fil / wax)|50","Duvet (fil / wax)|20","Narines (wax)|10","Menton (fil / wax)|20","Épilation visage (fil / wax), sans sourcils|50","Les aisselles|40"])}]},
{id:"mass",imgs:["prakob","hands","aroma"],g:[
 {t:"Nos massages",i:S(["Massage relaxant corps complet (45 min)|250","Massage dos uniquement (20 min)|100","Massage tonique|350","Massage amincissant maderothérapie (1 séance)|200","Massage à la bougie|350","Massage Pra Kob (compresses d'herbes)|390","Massage aux pierres chaudes|350","Massage Gun (pistolet) (45 min)|250","Digitopression (supplément)|100"])}]},
{id:"spec",imgs:["headspa","spices"],g:[
 {t:"Massages spéciaux",i:S(["HeadSpa massage Chuanzhi|490","Soins énergétiques (séance privée individuelle 3h)|2000|Nettoyage aurique et chakral, nettoyage méridiens, équilibrage chakral, recharge en énergie positive","Sounds Healing (1h)|500|Sound therapy avec bols tibétains et autres outils","Sujok thérapie|300","Massage thérapeutique|600|Soulager les nœuds musculaires, libérer les émotions négatives stockées dans le corps","Réflexologie plantaire – palmaire (40 min)|350","Réflexologie facial (40 min)|350","Massage aromathérapie|390"])}]}];

const GAL=["headspa","nails","face","prakob","straight","lashes","updo","brows","aroma","wavy","hands","spices","event","cut","orchid","blonde"];
const alt={headspa:"HeadSpa",nails:"Onglerie",face:"Soin visage",prakob:"Pra Kob",straight:"Lissage",lashes:"Cils",updo:"Coiffure",brows:"Sourcils",aroma:"Aromathérapie",wavy:"Cheveux",hands:"Massage",spices:"Spa",event:"Événement spécial dimanche",cut:"Coupe",orchid:"Épilation",blonde:"Cheveux blonds"};

/* ---------- Traductions ---------- */
const T={
fr:{logo1:"Centre de bien-être",n_about:"Le centre",n_services:"Services & tarifs",n_gallery:"Galerie",n_why:"Pourquoi Souha",n_contact:"Contact",n_book:"Prendre rendez-vous",h1:"Votre moment de bien-être à Tétouan",lead:"Ongles, visage, massages, cheveux, cils et épilation : prenez soin de vous au Centre de bien-être Souha.",book:"Réserver sur WhatsApp",see:"Voir les tarifs",about1:"Au cœur de Tétouan, le Centre de bien-être Souha réunit soins des ongles, soins du visage et du corps, massages, soins capillaires, cils, sourcils et épilation.",about2:"Retrouvez tous nos tarifs ci-dessous et réservez directement par WhatsApp.",c_mani:"Manucure & pédicure",c_face:"Soins visage",c_mass:"Massages",c_hair:"Cheveux",c_cils:"Cils & sourcils",c_epil:"Épilation",note:"Les prix sont en dirhams (Dh). « À partir de » : prix de départ.",from:"à partir de",w1t:"Large choix",w1:"Huit univers de soins réunis dans un seul centre.",w2t:"Produits sélectionnés",w2:"O.P.I Vegan, We Care Semilac, gamme Herome, coloration végan.",w3t:"Soins signature",w3:"Pédicure royale, HeadSpa Chuanzhi, Sounds Healing, Pra Kob.",w4t:"Réservation simple",w4:"Un message WhatsApp suffit pour fixer votre rendez-vous.",book_p:"Choisissez votre soin : WhatsApp s'ouvre avec votre message prêt à envoyer.",f_name:"Votre nom",f_service:"Service souhaité",f_date:"Date souhaitée",any:"Je souhaite un conseil",addr_t:"Adresse",near:"À côté de la station ISSO",phone_t:"Téléphone",hours_t:"Horaires",hours:"Pause de 14h00 à 15h00 · Dimanche : événement spécial",rdv:"Réserver",
msg:(s,n,d)=>`Bonjour, je souhaite prendre rendez-vous au Centre de bien-être Souha.${n?`\nNom : ${n}`:""}\nService : ${s}${d?`\nDate souhaitée : ${d}`:""}\nMerci de me confirmer la disponibilité.`,msg0:"Bonjour, je souhaite prendre rendez-vous au Centre de bien-être Souha. Pouvez-vous me confirmer vos disponibilités ?",
cat:{mani:"Manucure / Pédicure",ongl:"Onglerie",visage:"Visage / Corps",hair:"Soins capillaires",cils:"Cils & Sourcils",epil:"Épilation",mass:"Massages",spec:"Massages spéciaux"}},
en:{logo1:"Wellness center",n_about:"The center",n_services:"Services & prices",n_gallery:"Gallery",n_why:"Why Souha",n_contact:"Contact",n_book:"Book an appointment",h1:"Your wellness moment in Tétouan",lead:"Nails, face, massages, hair, lashes and waxing: treat yourself at Centre de Bien-être Souha.",book:"Book on WhatsApp",see:"See prices",about1:"In the heart of Tétouan, Centre de Bien-être Souha brings together nail care, face and body treatments, massages, hair care, lashes, brows and hair removal.",about2:"Find all our prices below and book directly on WhatsApp.",c_mani:"Manicure & pedicure",c_face:"Facials",c_mass:"Massages",c_hair:"Hair",c_cils:"Lashes & brows",c_epil:"Hair removal",note:"Prices are in dirhams (Dh). “From”: starting price. Service names are shown as on our menu.",from:"from",w1t:"Wide choice",w1:"Eight treatment worlds in a single center.",w2t:"Selected products",w2:"O.P.I Vegan, We Care Semilac, Herome range, vegan hair color.",w3t:"Signature treatments",w3:"Royal pedicure, HeadSpa Chuanzhi, Sounds Healing, Pra Kob.",w4t:"Easy booking",w4:"One WhatsApp message is enough to book your appointment.",book_p:"Choose your treatment: WhatsApp opens with your message ready to send.",f_name:"Your name",f_service:"Desired service",f_date:"Preferred date",any:"I'd like advice",addr_t:"Address",near:"Next to the ISSO station",phone_t:"Phone",hours_t:"Opening hours",hours:"Break 2:00 pm – 3:00 pm · Sunday: special event",rdv:"Book",
msg:(s,n,d)=>`Hello, I would like to book an appointment at Centre de Bien-être Souha.${n?`\nName: ${n}`:""}\nService: ${s}${d?`\nPreferred date: ${d}`:""}\nPlease confirm availability. Thank you.`,msg0:"Hello, I would like to book an appointment at Centre de Bien-être Souha. Could you confirm your availability?",
cat:{mani:"Manicure / Pedicure",ongl:"Nail studio",visage:"Face / Body",hair:"Hair care",cils:"Lashes & Brows",epil:"Hair removal",mass:"Massages",spec:"Special massages"}},
es:{logo1:"Centro de bienestar",n_about:"El centro",n_services:"Servicios y precios",n_gallery:"Galería",n_why:"Por qué Souha",n_contact:"Contacto",n_book:"Pedir cita",h1:"Tu momento de bienestar en Tetuán",lead:"Uñas, rostro, masajes, cabello, pestañas y depilación: cuídate en el Centre de Bien-être Souha.",book:"Reservar por WhatsApp",see:"Ver precios",about1:"En el corazón de Tetuán, el Centre de Bien-être Souha reúne cuidado de uñas, tratamientos faciales y corporales, masajes, cuidado capilar, pestañas, cejas y depilación.",about2:"Consulta todos nuestros precios y reserva directamente por WhatsApp.",c_mani:"Manicura y pedicura",c_face:"Faciales",c_mass:"Masajes",c_hair:"Cabello",c_cils:"Pestañas y cejas",c_epil:"Depilación",note:"Precios en dirhams (Dh). «Desde»: precio inicial. Los nombres de los servicios se muestran como en nuestra carta.",from:"desde",w1t:"Gran variedad",w1:"Ocho mundos de cuidados en un solo centro.",w2t:"Productos selectos",w2:"O.P.I Vegan, We Care Semilac, gama Herome, coloración vegana.",w3t:"Tratamientos estrella",w3:"Pedicura real, HeadSpa Chuanzhi, Sounds Healing, Pra Kob.",w4t:"Reserva fácil",w4:"Un mensaje de WhatsApp basta para fijar tu cita.",book_p:"Elige tu tratamiento: WhatsApp se abre con tu mensaje listo para enviar.",f_name:"Tu nombre",f_service:"Servicio deseado",f_date:"Fecha deseada",any:"Quiero asesoramiento",addr_t:"Dirección",near:"Junto a la estación ISSO",phone_t:"Teléfono",hours_t:"Horario",hours:"Pausa de 14:00 a 15:00 · Domingo: evento especial",rdv:"Reservar",
msg:(s,n,d)=>`Hola, me gustaría pedir una cita en el Centre de Bien-être Souha.${n?`\nNombre: ${n}`:""}\nServicio: ${s}${d?`\nFecha deseada: ${d}`:""}\n¿Pueden confirmarme la disponibilidad? Gracias.`,msg0:"Hola, me gustaría pedir una cita en el Centre de Bien-être Souha. ¿Pueden confirmarme la disponibilidad?",
cat:{mani:"Manicura / Pedicura",ongl:"Uñas",visage:"Rostro / Cuerpo",hair:"Cuidado capilar",cils:"Pestañas y Cejas",epil:"Depilación",mass:"Masajes",spec:"Masajes especiales"}},
ar:{logo1:"مركز العناية والاسترخاء",n_about:"عن المركز",n_services:"الخدمات والأسعار",n_gallery:"المعرض",n_why:"لماذا سوها",n_contact:"اتصل بنا",n_book:"احجزي موعدك",h1:"لحظة استرخاء وعناية في تطوان",lead:"أظافر، بشرة، مساج، شعر، رموش وإزالة الشعر: اعتني بنفسك في مركز سوها للعناية والاسترخاء.",book:"احجزي عبر واتساب",see:"عرض الأسعار",about1:"في قلب مدينة تطوان، يجمع مركز سوها للعناية والاسترخاء بين العناية بالأظافر، والبشرة والجسم، والمساج، والعناية بالشعر، والرموش والحواجب وإزالة الشعر.",about2:"اطلعي على جميع أسعارنا أدناه واحجزي مباشرة عبر واتساب.",c_mani:"مانيكير وبيديكير",c_face:"عناية بالبشرة",c_mass:"مساج",c_hair:"الشعر",c_cils:"الرموش والحواجب",c_epil:"إزالة الشعر",note:"الأسعار بالدرهم (Dh). «ابتداءً من»: السعر الأدنى. أسماء الخدمات مكتوبة كما في قائمتنا.",from:"ابتداءً من",w1t:"تنوع كبير",w1:"ثمانية عوالم للعناية في مركز واحد.",w2t:"منتجات مختارة",w2:"O.P.I Vegan، We Care Semilac، منتجات Herome، وصبغة نباتية.",w3t:"خدمات مميزة",w3:"بيديكير روايال، HeadSpa Chuanzhi، Sounds Healing، Pra Kob.",w4t:"حجز سهل",w4:"رسالة واحدة عبر واتساب تكفي لحجز موعدك.",book_p:"اختاري خدمتك: يفتح واتساب برسالة جاهزة للإرسال.",f_name:"اسمك",f_service:"الخدمة المطلوبة",f_date:"التاريخ المفضل",any:"أريد استشارة",addr_t:"العنوان",near:"بجانب محطة ISSO",phone_t:"الهاتف",hours_t:"أوقات العمل",hours:"استراحة من 14:00 إلى 15:00 · الأحد: حدث خاص",rdv:"احجزي",
msg:(s,n,d)=>`السلام عليكم، أود حجز موعد في مركز سوها للعناية والاسترخاء.${n?`\nالاسم: ${n}`:""}\nالخدمة: ${s}${d?`\nالتاريخ المفضل: ${d}`:""}\nمرحبا بتأكيد التوفر، شكرا.`,msg0:"السلام عليكم، أود حجز موعد في مركز سوها للعناية والاسترخاء. هل يمكنكم تأكيد المواعيد المتاحة؟",
cat:{mani:"مانيكير / بيديكير",ongl:"الأظافر",visage:"البشرة / الجسم",hair:"العناية بالشعر",cils:"الرموش والحواجب",epil:"إزالة الشعر",mass:"المساج",spec:"مساج خاص"}}};

/* ---------- Rendu ---------- */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let lang=localStorage.getItem("lang")||"fr",cur="mani";
if(!T[lang])lang="fr";
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

function renderLangs(){$("#langs").innerHTML=Object.keys(FLAGS).map(l=>`<button data-l="${l}" class="${l===lang?"on":""}" title="${LN[l]}" aria-label="${LN[l]}"><img src="https://flagcdn.com/w40/${FLAGS[l]}.png" alt="${LN[l]}" width="26" height="18"></button>`).join("")}
function renderTabs(){$("#tabs").innerHTML=CATS.map(c=>`<button role="tab" data-c="${c.id}" class="${c.id===cur?"on":""}">${T[lang].cat[c.id]}</button>`).join("")}
function renderList(){
 const c=CATS.find(x=>x.id===cur),t=T[lang];
 const side=c.imgs.slice(0,2).map(i=>`<img src="img/${i}.webp" alt="${t.cat[c.id]}" loading="lazy" width="400" height="500">`).join("");
 $("#list").innerHTML=`<div class="panel"><div>${c.g.map(g=>`<div class="grp"><h4>${g.t}</h4>${g.i.map(i=>`<div class="it"><div class="n">${i.n}${i.d?`<i>${i.d}</i>`:""}</div><div class="p">${i.f?`<small>${t.from} </small>`:""}${i.p} Dh</div><a href="${wa(t.msg(i.n))}" target="_blank" rel="noopener">${t.rdv}</a></div>`).join("")}</div>`).join("")}</div><div class="side">${side}</div></div>`;
}
function renderSelect(){
 const t=T[lang];$("#f_service").innerHTML=`<option value="">${t.any}</option>`+CATS.map(c=>`<optgroup label="${t.cat[c.id]}">${c.g.flatMap(g=>g.i).map(i=>`<option>${i.n}</option>`).join("")}</optgroup>`).join("");
}
function applyLang(l){
 lang=l;localStorage.setItem("lang",l);
 document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
 $$("[data-i18n]").forEach(e=>e.textContent=T[l][e.dataset.i18n]);
 document.title={fr:"Centre de Bien-être Souha – Spa & Beauté à Tétouan",en:"Souha Wellness Center – Spa & Beauty in Tétouan",es:"Centro de bienestar Souha – Spa y belleza en Tetuán",ar:"مركز سوها للعناية والاسترخاء – تطوان"}[l];
 renderLangs();renderTabs();renderList();renderSelect();updWA();
}
function updWA(){$$("[data-wa]").forEach(a=>{a.href=wa(T[lang].msg0);a.target="_blank";a.rel="noopener"})}

$("#langs").onclick=e=>{const b=e.target.closest("button");if(b)applyLang(b.dataset.l)};
$("#tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.c;renderTabs();renderList()};
$("#send").onclick=()=>{const t=T[lang];window.open(wa(t.msg($("#f_service").value||t.any,$("#f_name").value.trim(),$("#f_date").value)),"_blank","noopener")};
const nav=$("#nav"),bg=$("#burger");
bg.onclick=()=>{const o=nav.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.tagName==="A"){nav.classList.remove("open");bg.setAttribute("aria-expanded",false)}};

$("#grid").innerHTML=GAL.map(i=>`<button data-i="${i}" aria-label="${alt[i]}"><img src="img/${i}.webp" alt="${alt[i]}" loading="lazy" width="300" height="300"></button>`).join("");
$("#grid").onclick=e=>{const b=e.target.closest("button");if(!b)return;const d=document.createElement("div");d.className="lb";d.innerHTML=`<img src="img/${b.dataset.i}.webp" alt="${alt[b.dataset.i]}">`;d.onclick=()=>d.remove();document.body.append(d)};
document.addEventListener("keydown",e=>{if(e.key==="Escape")$(".lb")?.remove()});

$("#y").textContent=new Date().getFullYear();
$$(".wrap>*,.hero-in>*").forEach(e=>e.classList.add("rv"));
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("vis");io.unobserve(x.target)}}),{threshold:.08});
$$(".rv").forEach(e=>io.observe(e));
applyLang(lang);
})();
