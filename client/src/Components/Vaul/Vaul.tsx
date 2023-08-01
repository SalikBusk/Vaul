import React from "react";

import { Drawer } from "vaul";
import Button from "../Button";
import Heading from "../Heading";
import Image from "../Image";

export function Vaul() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button label="Åben" onClick={() => {}} outline />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 overflow-auto">
          <section className="max-w-[2520px] w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            {/* Header */}
            <header>
              <Heading title="Dette er en Vaul" center />
            </header>
            {/* Content */}
            <section className="pt-[50px]">
              <Image title="Title" subtitle="Subtitle" inside/>
            </section>
          </section>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
