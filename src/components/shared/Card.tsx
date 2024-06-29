import React from 'react'
import { Card, CardFooter, Button, Image } from "@nextui-org/react";

const CardComponent = ({ title, btnName }: { title: string, btnName: string }) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        src="https://media.istockphoto.com/id/1147844177/vector/bingo-lottery-game-logo.jpg?s=612x612&w=0&k=20&c=L6kRUX4qrFGFuctbB7tJ6JkTryFfdNeXLxFCWio0K6Y="
        alt="..."
        className="object-cover"
        height={200}
        width={200}
        sizes='100vw'
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{title}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          {btnName}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent;
