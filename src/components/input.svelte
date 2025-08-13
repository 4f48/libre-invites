<script lang="ts">
    import { cn } from "@/lib";
    import { Label } from "bits-ui";
    import { onMount } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLInputElement> {
        name: string;
    }
    const { class: className, name, ...props }: Props = $props();

    const id = name.toLowerCase();
</script>

<Label.Root for={id} class="sr-only">{name}</Label.Root>
<input
    autocomplete="off"
    class={cn(
        "rounded-lg outline h-9 px-2.5 focus-visible:bg-neutral-800 bg-clip-outline focus-visible:outline-3 w-full focus-visible:outline-blue-500 outline-neutral-600 hover:bg-neutral-800 placeholder:text-neutral-500",
        className,
    )}
    {id}
    {name}
    placeholder={name}
    {...props}
/>
