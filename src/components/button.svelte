<script lang="ts">
    import { Button } from "bits-ui";
    import type { Snippet } from "svelte";
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "@/lib";

    const button = cva(
        "cursor-pointer flex justify-center duration-100 font-medium grow-0 shrink-0 items-center",
        {
            variants: {
                variant: {
                    primary: "bg-white hover:bg-white/90 text-neutral-900",
                    secondary:
                        "bg-neutral-600/75 hover:bg-neutral-600 text-white",
                    ghost: "hover:bg-neutral-600/50 text-white",
                },
                size: {
                    action: "rounded-md py-1 px-2",
                    modal: "rounded-full py-2 px-4",
                    icon: "size-6 rounded-md",
                },
            },
            defaultVariants: {
                size: "action",
                variant: "primary",
            },
        },
    );

    type Props = {
        children: Snippet;
    } & Button.RootProps &
        VariantProps<typeof button>;
    const {
        children,
        class: className,
        size,
        variant,
        ...props
    }: Props = $props();
</script>

<Button.Root class={cn(button({ className, size, variant }))} {...props}
    >{@render children()}</Button.Root
>
