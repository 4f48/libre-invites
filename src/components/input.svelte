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

    import { cn } from "@/lib";
    import { Label } from "bits-ui";
    import { onMount } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLInputElement> {
        id: string;
        name: string;
    }
    const { class: className, id, name, ...props }: Props = $props();
</script>

<Label.Root for={id} class="sr-only">{name}</Label.Root>
<input
    autocomplete="off"
    class={cn(
        "rounded-lg outline h-9 px-2.5 focus-visible:bg-neutral-800 bg-clip-outline focus-visible:outline-3 w-full focus-visible:outline-blue-500 outline-neutral-600 enabled:hover:bg-neutral-800 placeholder:text-neutral-500",
        className,
    )}
    {id}
    name={id}
    placeholder={name}
    {...props}
/>
