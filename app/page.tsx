import {
  Categories,
  Container,
  Filters,
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
        <Title
          text="Весь ассортимент"
          size="lg"
          className="font-extrabold mt-10"
        />
      </Container>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250x]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
