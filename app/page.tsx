import {
  Categories,
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Slider,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <TopBar />
      <Container>
        <Slider />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250x]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <Title text="Весь ассортимент" size="sm" className="font-bold" />
              <ProductsGroupList
                title="Видеокарты"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "ASUS ROG Strix GeForce RTX 4090",
                    image:
                      "https://i.can.ua/images/650x650/goods/14070/14070483.jpg",
                    price: 92965,
                  },
                  {
                    id: 1,
                    name: "POWERCOLOR Fighter AMD Radeon RX 7900 GRE 16GB GDDR6",
                    image: "https://i.can.ua/goods/14479/14479401.jpg",
                    price: 26829,
                  },
                  {
                    id: 1,
                    name: "POWERCOLOR Hellhound AMD Radeon RX 7900 GRE 16GB GDDR6",
                    image: "https://i.can.ua/goods/14479/14479461.jpg",
                    price: 27701,
                  },
                  {
                    id: 1,
                    name: "ASUS TUF Gaming GeForce RTX 4070 Ti Super 16GB GDDR6X OG OC Edition",
                    image:
                      "https://i.can.ua/images/650x650/goods/14623/14623711.jpg",
                    price: 44733,
                  },
                  {
                    id: 1,
                    name: "ASUS Prime GeForce RTX 4070 12GB GDDR6X OC Edition",
                    image:
                      "https://i.can.ua/images/650x650/goods/14544/14544531.jpg",
                    price: 28443,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Aero OC 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/12133/12133129.jpg",
                    price: 15269,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Eagle OC 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/12133/12133199.jpg",
                    price: 13917,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Ti Eagle 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/11869/11869839.jpg",
                    price: 17672,
                  },
                ]}
              />

              <ProductsGroupList
                title="Процессоры"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "ASUS ROG Strix GeForce RTX 4090",
                    image:
                      "https://i.can.ua/images/650x650/goods/14070/14070483.jpg",
                    price: 92965,
                  },
                  {
                    id: 1,
                    name: "POWERCOLOR Fighter AMD Radeon RX 7900 GRE 16GB GDDR6",
                    image: "https://i.can.ua/goods/14479/14479401.jpg",
                    price: 26829,
                  },
                  {
                    id: 1,
                    name: "POWERCOLOR Hellhound AMD Radeon RX 7900 GRE 16GB GDDR6",
                    image: "https://i.can.ua/goods/14479/14479461.jpg",
                    price: 27701,
                  },
                  {
                    id: 1,
                    name: "ASUS TUF Gaming GeForce RTX 4070 Ti Super 16GB GDDR6X OG OC Edition",
                    image:
                      "https://i.can.ua/images/650x650/goods/14623/14623711.jpg",
                    price: 44733,
                  },
                  {
                    id: 1,
                    name: "ASUS Prime GeForce RTX 4070 12GB GDDR6X OC Edition",
                    image:
                      "https://i.can.ua/images/650x650/goods/14544/14544531.jpg",
                    price: 28443,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Aero OC 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/12133/12133129.jpg",
                    price: 15269,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Eagle OC 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/12133/12133199.jpg",
                    price: 13917,
                  },
                  {
                    id: 1,
                    name: "GIGABYTE GeForce RTX 4060 Ti Eagle 8G",
                    image:
                      "https://i.can.ua/images/650x650/goods/11869/11869839.jpg",
                    price: 17672,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
