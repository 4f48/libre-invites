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

    import { Switch, type WithoutChildrenOrChild } from "bits-ui";

    let {
        checked = $bindable(false),
        ref = $bindable(null),
        ...props
    }: WithoutChildrenOrChild<Switch.RootProps> = $props();
</script>

<Switch.Root
    bind:checked
    bind:ref
    class="bg-neutral-800 enabled:data-[state=unchecked]:hover:bg-neutral-600 disabled:opacity-75 data-[state=checked]:bg-blue-500 enabled:data-[state=checked]:hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500 rounded-full inline-flex peer h-6 items-center px-0.5 w-9"
    {...props}
>
    <Switch.Thumb
        class="bg-white transition-transform duration-300 size-5 block data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 rounded-full"
    />
</Switch.Root>
