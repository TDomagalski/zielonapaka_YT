export const products = [
  {
    name: 'Pomidory',
    price: 15,
    description:
      'Nasze ekologiczne pomidory są uprawiane bez sztucznych nawozów i pestycydów. Pełne smaku i wartości odżywczych, idealne do sałatek, sosów i kanapek. Wybierając je, wspierasz zdrowe rolnictwo i dbasz o środowisko. Spróbuj już dziś!',
    imageURL:
      'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Marchewki',
    price: 23,
    description:
      'Nasze ekologiczne marchewki to zdrowy i naturalny wybór. Uprawiane bez chemii, pełne witamin i minerałów, są idealne do jedzenia na surowo, gotowania i pieczenia. Wybierając nasze marchewki, wspierasz zrównoważone rolnictwo i zdrowy styl życia.',
    imageURL:
      'https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ogórki',
    price: 18,
    description:
      'Nasze ekologiczne ogórki to świeżość i zdrowie prosto z natury. Bez chemicznych dodatków, pełne witamin i minerałów, doskonałe do sałatek, kanapek i przetworów. Wybierając nasze ogórki, wspierasz ekologiczne rolnictwo i dbasz o swoje zdrowie.',
    imageURL:
      'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Kalafiory',
    price: 20,
    description:
      'Nasze ekologiczne kalafiory to zdrowie i smak w jednym. Uprawiane bez chemii, pełne witamin i minerałów, są doskonałe do gotowania, pieczenia i duszenia. Wybierając nasze kalafiory, wspierasz zdrowy styl życia i dbasz o środowisko.',
    imageURL:
      'https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ziemniaki',
    price: 10,
    description:
      'Nasze ekologiczne ziemniaki to gwarancja naturalnego smaku i jakości. Uprawiane bez sztucznych nawozów, bogate w składniki odżywcze, idealne do gotowania, pieczenia i smażenia. Wybierając nasze ziemniaki, wspierasz zrównoważone rolnictwo i zdrowe odżywianie.',
    imageURL:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=3888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Papryczki chili',
    price: 25,
    description:
      'Nasze ekologiczne papryczki chili to pikantny akcent prosto z natury. Uprawiane bez chemii, pełne witamin i antyoksydantów, dodają potrawom wyjątkowego smaku i aromatu. Wybierając nasze chili, wspierasz ekologiczne rolnictwo i zdrowy tryb życia.',
    imageURL:
      'https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Ten skrypt tworzy produkty w bazie danych na podstawie danych z pliku products.ts. aby go uruchomić, należy wpisać w terminalu: npx prisma db seed.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding started...');

  for (const product of products) {
    const result = await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        description: product.description,
        imageURL: product.imageURL,
      },
    });

    console.log(`Created product with ID: ${result.id}`);
  }

  console.log('Seeding finished!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
