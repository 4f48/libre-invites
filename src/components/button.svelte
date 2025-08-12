<script lang="ts">
    import { Button } from "bits-ui";
    import type { Snippet } from "svelte";
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "@/lib";

    const button = cva("cursor-pointer duration-100 font-medium", {
        variants: {
            variant: {
                primary:
                    "bg-white hover:opacity-90 text-neutral-900 rounded-full py-2 px-4",
                secondary: "bg-white/75 text-white rounded-full py-2 px-4",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    });

    type Props = {
        children: Snippet;
        class?: string;
    } & Button.RootProps &
        VariantProps<typeof button>;
    const { children, class: className, variant, ...props }: Props = $props();
</script>

<Button.Root class={cn(button({ className, variant }))} {...props}
    >{@render children()}</Button.Root
>
