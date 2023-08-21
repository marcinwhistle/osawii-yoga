import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      name: 'Kurs Jogi dla Początkujących',
      price: 99,
      description:
        'Zacznij swoją przygodę z jogą od podstaw. Poznaj techniki oddechu, asany i medytację.',
      imageSource: '1.jpg',
    },
    {
      id: '4b2db7a8-00e7-4099-959d-30d846c9de08',
      name: 'Intensywny Kurs Power Jogi',
      price: 129,
      description:
        'Wypróbuj wyzwanie dla swojego ciała i umysłu. Zwiększ siłę, gibkość i kondycję w intensywnych sesjach.',
      imageSource: '2.jpg',
    },
    {
      id: '105224b7-9f2f-4a22-9e5f-fd4cd831af9e',
      name: 'Kurs Jogi Restauracyjnej',
      price: 79,
      description:
        'Zrelaksuj się i zregeneruj w spokojnych i terapeutycznych praktykach jogi, które pomogą w redukcji stresu.',
      imageSource: '3.jpg',
    },
    {
      id: '105224b7-9f2f-4a22-9e5f-fd4cd831ag6y',
      name: 'Kurs Jogi dla Zaawansowanych Asan',
      price: 149,
      description:
        'Dla doświadczonych praktyków, którzy chcą zgłębić swoje umiejętności w trudniejszych asanach i technikach.',
      imageSource: '4.jpg',
    },
  ];
}

function getOrders() {
  return [
    {
      id: 'b8447e79-8a43-44d0-8f9a-623cc5355bd5',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'John Doe',
      address: '1234 Main St, New York, NY 10001',
    },
    {
      id: '6c81aeb3-2e97-4ee4-b085-d7a07ff812a5',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'Jane Doe',
      address: '23 Baker Street, New York, NY 10001',
    },
    {
      id: '4b5ec66f-3fb9-45c8-9fb2-c3a7c734d0a6',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'Al Swearengen',
      address: '12 Main St, Deadwood, DA 12002',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getOrders().map(({ productId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );
}

seed();
