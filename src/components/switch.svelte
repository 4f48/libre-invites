<script lang="ts">
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
