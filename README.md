# Vaul
Vaul er en Komponent til React, der jan bruges som en Dialog-erstatning på tablets og mobile enheder. Den bruger Radix's Dialog primitive under hætten.

# Brug
    npm install vaul

Use the drawer in your app.

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
