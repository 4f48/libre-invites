<script lang="ts">
    /* This file is part of Libre Invites.
     *
     * Copyright (C) 2025 Olivér Pirger
     *
     * Libre Invites is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License version 3
     * as published by the Free Software Foundation.
     *
     * Libre Invites is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
     * GNU Affero General Public License for more details.
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with Libre Invites. If not, see <https://www.gnu.org/licenses/>.
     */

    import { Button } from "bits-ui";
    import type { Snippet } from "svelte";
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "@/lib";

    const button = cva(
        "cursor-pointer flex focus-visible:outline-4 focus-visible:outline-blue-500/75 justify-center transition-colors duration-100 font-medium grow-0 shrink-0 items-center",
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
