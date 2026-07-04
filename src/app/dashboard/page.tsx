import HikeCard from "../components/HikeCard";

export default function DashboardPage() {
  return (
    <>
      <h1>Välkommen till din Dashboard! Detta är en skyddad route.</h1>
      <h2>Mina Hajks</h2>
      <div>
        <HikeCard />
        <HikeCard />
        <HikeCard />
      </div>
    </>
  );
}
