# Vaul
Vaul er en Komponent til React, der jan bruges som en Dialog-erstatning på tablets og mobile enheder. Den bruger [Radix's Dialog primitive](https://www.radix-ui.com/docs/primitives/components/dialog#trigger) under hætten og er inspireret af [dette tweet](https://twitter.com/devongovett/status/1674470185783402496).

## Brug
    npm install vaul

Brug denne i din app.

    import { Drawer } from 'vaul';

    function MyComponent() {
      return (
        <Drawer.Root>
          <Drawer.Trigger>Open</Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Content>
              <p>Content</p>
            </Drawer.Content>
            <Drawer.Overlay />
          </Drawer.Portal>
        </Drawer.Root>
      );
    }
    
## Eksempler



