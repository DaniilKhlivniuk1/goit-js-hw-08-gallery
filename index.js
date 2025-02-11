const tanksData =  [
  {

    photo: "./images/T72.webp",
 
  },
  {

    photo: "./images/A7V.webp",

  },
  {

    photo: "./images/Leopard2.webp",

  },
  {
    title: "T-34",
    price: 500000,
    photo: "./images/T34.webp",
    nation: "Soviet Union",
    era: "Second World War",
    description:
      "The T-34 was a revolutionary tank of World War II, combining sloped armor, mobility, and a powerful gun. Its simple yet effective design allowed for mass production, making it a backbone of Soviet armored forces. It played a crucial role in the defeat of Nazi Germany.",
  },
  {
    title: "Mark V",
    price: 500000,
    photo: "./images/MarkV.webp",
    nation: "UK",
    era: "First World War",
    description:
      "The Mark V was a British WWI tank that played a key role in breaking trench warfare deadlocks. With its distinctive rhomboid shape, it could cross trenches and navigate rough terrain. Despite being slow and cumbersome, it paved the way for future tank development.",
  },
  {
    title: "M60 Patton",
    price: 500000,
    photo: "./images/M60Patton.webp",
    nation: "USA",
    era: "Cold War",
    description:
      "The M60 Patton was the backbone of the U.S. armored forces during the Cold War. It featured a powerful 105mm gun and improved armor over its predecessors. Although replaced by the M1 Abrams, upgraded versions still serve in some countries today.",
  },
  {
    title: "Type 10",
    price: 9000000,
    photo: "./images/Type10.webp",
    nation: "Japan",
    era: "Modern Era",
    description:
      "The Type 10 is Japan’s latest main battle tank, designed for high mobility and advanced combat systems. Featuring modular armor and a 120mm smoothbore gun, it is well-suited for Japan’s mountainous terrain and urban warfare scenarios.",
  },
  {
    title: "Renault FT",
    price: 300000,
    photo: "./images/RenaultFT.webp",
    nation: "France",
    era: "Interwar period",
    description:
      "The Renault FT was the world’s first tank to feature a fully rotating turret, setting the standard for future designs. Light and agile for its time, it saw combat in WWI and remained in service in various countries for decades.",
  },
  {
    title: "Tiger 131",
    price: 4500000,
    photo: "./images/Tiger1.webp",
    nation: "German Reich",
    era: "Second World War",
    description:
      "Tiger 131 is one of the most famous tanks from World War II, known for its thick armor and powerful 88mm gun. Despite its superior firepower, it was expensive and mechanically complex. Captured by British forces in 1943, it remains operational and is displayed at the Bovington Tank Museum.",
  },
  {
    title: "Merkava",
    price: 4500000,
    photo: "./images/Merkava.webp",
    nation: "Israel",
    era: "Modern war",
    description:
      "Designed for crew survivability, the Merkava is Israel’s primary battle tank. It features a unique rear troop compartment, allowing it to transport infantry. Its advanced protection systems and powerful armament make it highly effective in urban and desert warfare.",
  },
  {
    title: "T-28",
    price: 200000,
    photo: "./images/T28.webp",
    nation: "Soviet Union",
    era: "Interwar period",
    description:
      "The T-28 was a Soviet multi-turreted medium tank designed for breakthrough operations. While innovative, its complex design made it vulnerable to mechanical issues. It saw limited action during the Winter War and early WWII.",
  },
  {
    title: "Vickers Medium Mark II",
    price: 150000,
    photo: "./images/VickersMediumII.webp",
    nation: "UK",
    era: "Interwar period",
    description:
      "The Vickers Medium Mark II was one of the first tanks to incorporate a fully enclosed rotating turret. It served in the British Army between WWI and WWII and influenced later tank designs. While slow, it provided valuable experience in armored warfare.",
  },
  {
    title: "M4 Sherman",
    price: 400000,
    photo: "./images/M4Sherman.webp",
    nation: "USA",
    era: "Second World War",
    description:
      "The M4 Sherman was the workhorse of the U.S. military during World War II. Reliable and easy to produce, it was used in large numbers across multiple battlefronts. While not the most heavily armored or armed tank, its adaptability and mass production made it a crucial asset in the Allied victory.",
  },
  {
    title: "T-90",
    price: 3000000,
    photo: "./images/T90.webp",
    nation: "Russia",
    era: "Modern war",
    description:
      "The T-90 is a modern Russian battle tank with a strong balance of firepower, protection, and mobility. It features reactive armor and an active protection system to counter threats. It is widely exported and serves as the backbone of Russia’s armored forces.",
  },
  {
    title: "Challenger 2",
    price: 11000000,
    photo: "./images/Challenger2.webp",
    nation: "UK",
    era: "Modern war",
    description:
      "The Challenger 2 is the British Army’s main battle tank, known for its exceptional armor protection and rifled 120mm gun. It holds the record for the longest tank-on-tank kill. Despite its weight, it is highly durable and combat-proven in various conflicts.",
  },
  {
    title: "Type 59",
    price: 500000,
    photo: "./images/Type59.webp",
    nation: "China",
    era: "Cold War Era",
    description:
      "Based on the Soviet T-54, the Type 59 was China’s primary battle tank for decades. It was produced in large numbers and has been upgraded in various configurations. It remains in service with some countries even today.",
  },
  {
    title: "Chieftain",
    price: 750000,
    photo: "./images/Chieftain.webp",
    nation: "UK",
    era: "Cold War",
    description:
      "The Chieftain was the UK’s main battle tank during the Cold War, featuring heavy armor and a powerful 120mm gun. It set the foundation for future British tank designs and was exported to several nations. Its advanced firepower made it a formidable opponent in its era.",
  },
  {
    title: "Panther",
    price: 6000000,
    photo: "./images/Panther.webp",
    nation: "German Reich",
    era: "Second World War",
    description:
      "The Panther was Germany’s answer to Soviet armor, boasting superior firepower, armor, and mobility. It outclassed many Allied tanks but was plagued by reliability issues. Despite these problems, it was one of the most effective tanks of World War II.",
  },
  {
    title: "AMX-56 Leclerc",
    price: 8500000,
    photo: "./images/Leclerc.webp",
    nation: "France",
    era: "Modern war",
    description:
      "The Leclerc is France’s cutting-edge main battle tank, boasting high-speed mobility and an autoloading 120mm gun. It is one of the fastest tanks in the world, capable of rapid deployment. Its sophisticated fire control system makes it a formidable force on the battlefield.",
  },
  {
    title: "T-55",
    price: 250000,
    photo: "./images/T55.webp",
    nation: "Soviet Union",
    era: "Cold War",
    description:
      "The T-55 was one of the most widely produced tanks in history, serving in numerous conflicts throughout the Cold War. Featuring a simple yet effective design, it was known for its durability and ease of maintenance. Many are still in service today with modifications.",
  },
  {
    title: "M1 Abrams",
    price: 6000000,
    photo: "./images/M1Abrams.webp",
    nation: "USA",
    era: "Modern war",
    description:
      "The M1 Abrams is a modern main battle tank known for its advanced composite armor and powerful 120mm smoothbore gun. It features a gas turbine engine, providing exceptional speed and mobility. It has been a key component of U.S. military operations since the 1980s.",
  },
  {
    title: "Stridsvagn 103",
    price: 3500000,
    photo: "./images/Strv103.webp",
    nation: "Sweden",
    era: "Cold War",
    description:
      "The Stridsvagn 103, or S-Tank, was a Swedish Cold War-era main battle tank with a unique turretless design. Instead of a rotating turret, it used its suspension to aim its fixed 105mm gun. It featured an autoloader and was one of the most well-defended and low-profile tanks of its time.",
  },
  {
    title: "KV-2",
    price: 400000,
    photo: "./images/KV2.webp",
    nation: "Soviet Union",
    era: "Second World War",
    description:
      "The KV-2 was a Soviet heavy tank equipped with a massive 152mm howitzer. Designed for bunker-busting, it had formidable armor but was slow and mechanically unreliable. Despite its drawbacks, it struck fear into enemy forces with its sheer firepower.",
  },
  {
    title: "Type 97 Chi-Ha",
    price: 300000,
    photo: "./images/Type97ChiHa.webp",
    nation: "Japan",
    era: "World War II",
    description:
      "The Type 97 Chi-Ha was Japan’s most widely used medium tank during World War II. Though lightly armored compared to Western tanks, it was reliable and played a key role in Japan’s early conquests in the Pacific theater.",
  },
  {
    title: "Type 99",
    price: 7000000,
    photo: "./images/Type99.webp",
    nation: "China",
    era: "Modern war",
    description:
      "China’s most advanced main battle tank, the Type 99 features explosive reactive armor, a powerful 125mm smoothbore gun, and advanced fire control systems. It is designed to compete with the best modern tanks in the world.",
  },
  {
    title: "Char B1",
    price: 300000,
    photo: "./images/CharB1.webp",
    nation: "France",
    era: "Second World War",
    description:
      "A heavily armored French tank with a dual-gun setup, featuring a 75mm hull-mounted gun and a turret-mounted 47mm cannon. It was tough and well-defended but suffered from poor mobility and inefficient command structure.",
  },
  {
    title: "IS-3",
    price: 500000,
    photo: "./images/IS3.webp",
    nation: "Soviet Union",
    era: "Second World War",
    description:
      "The IS-3 was an advanced Soviet heavy tank introduced at the end of World War II. Its distinctive pike-nose armor and powerful 122mm gun made it a formidable opponent, influencing post-war tank designs around the world.",
  },
  {
    title: "Centurion",
    price: 900000,
    photo: "./images/Centurion.webp",
    nation: "UK",
    era: "Cold War",
    description:
      "The Centurion was a British post-war main battle tank known for its balance of firepower, protection, and mobility. It saw action in numerous conflicts worldwide and was continuously upgraded over decades of service.",
  },
  {
    title: "BT-7",
    price: 200000,
    photo: "./images/BT7.webp",
    nation: "Soviet Union",
    era: "Second World War",
    description:
      "The BT-7 was a Soviet fast tank used in the early stages of World War II. Known for its speed and mobility, it was effective in early operations but was outmatched by more advanced enemy armor as the war progressed.",
  },
  {
    title: "Maus",
    price: 10000000,
    photo: "./images/Maus.webp",
    nation: "German Reich",
    era: "Second World War",
    description:
      "The Maus was the heaviest tank ever built, designed as an ultra-heavy breakthrough vehicle. Weighing 188 tons and armed with a massive 128mm gun, it was nearly impervious to enemy fire but was impractical due to its extreme weight and mobility issues.",
  },
];


const tanksElements = tanksData
  .map(
    (tank) => `<li class="tanks-item">
                <h2 class="tanks-title">${tank.title}</h2>
                <img class="tanks-image" src="${tank.photo}" alt="${tank.title}" data-path="${tank.photo}">
                <p class="tanks-text" data-describtion="${tank.description}" data-nation="${tank.nation}" data-era="${tank.era}">Price: $${tank.price}</p>
            </li>`
  )
  .join("");
const tankSection = document.querySelector(".tanks");
tankSection.innerHTML = tanksElements;

document.querySelector(".tanks").addEventListener("click", (event) => {
  if (event.target.nodeName === "UL") {
    return;
  }
  document.querySelector(".backdrop").classList.remove("is-hidden");
  const item = event.target.closest(".tanks-item");
  const imageTag = item.firstElementChild.nextElementSibling;
  document.querySelector(".modal-image").src = imageTag.dataset.path;
  document.querySelector(".modal-title").textContent = item.firstElementChild.textContent;
  document.querySelector(".modal-decribtion").textContent = item.lastElementChild.dataset.describtion;
  document.querySelector(".modal-price").textContent = item.lastElementChild.textContent;
  document.querySelector(".modal-nation").textContent = `Nation: ${item.lastElementChild.dataset.nation}`;
  document.querySelector(".modal-era").textContent = `Era: ${item.lastElementChild.dataset.era}`;
  console.log();
});

document
  .querySelector(".modal-cross")
  .addEventListener("click", (event) =>
    document.querySelector(".backdrop").classList.add("is-hidden")
  );