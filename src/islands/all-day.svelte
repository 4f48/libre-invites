<script lang="ts">
    import { Switch } from "@/components";
    import { eventAllDay } from "@/lib/stores";
    import { Label, useId } from "bits-ui";

    const id = useId();
</script>

<div class="flex items-center">
    <Label.Root class="flex-1 text-neutral-400 my-1" for={id}
        >All Day</Label.Root
    >
    <Switch bind:checked={$eventAllDay} disabled {id} />
</div>
