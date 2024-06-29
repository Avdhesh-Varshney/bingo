import CardComponent from "@/components/shared/Card";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 my-2">
      <div className="flex-1">
        <h1 className="text-4xl text-center">Welcome to Bingo Game</h1>

        <div className="flex flex-col gap-5">
          <div className="flex gap-4 justify-start">
            <CardComponent title="Bingo Game" btnName="About the Game" />
            <div> This is a bingo game.</div>
          </div>
          <div className="flex gap-4 justify-end">
            <div> This is a bingo game.</div>
            <CardComponent title="Bingo Game" btnName="About the Game" />
          </div>
          <div className="flex gap-4 justify-start">
            <CardComponent title="Bingo Game" btnName="About the Game" />
            <div> This is a bingo game.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
