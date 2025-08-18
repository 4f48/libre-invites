<script lang="ts">
    import { DatePicker, Switch, TimeField } from "@/components";
    import { getLocalTimeZone, now } from "@internationalized/date";
    import { Label, useId } from "bits-ui";

    const id = useId();

    let allDay = $state(false);
</script>

<div class="*:flex *:items-center *:gap-1 grid gap-2">
    <div>
        <Label.Root class="flex-1 text-neutral-400 my-1" for={id}
            >All Day</Label.Root
        >
        <Switch bind:checked={allDay} {id} />
    </div>
    <div>
        <DatePicker id="start" name="Starts" />
        {#if !allDay}
            <TimeField id="start-time" name="Start time" />
        {/if}
    </div>
    <div>
        <DatePicker id="end" name="Ends" />
        {#if !allDay}
            <TimeField
                id="end-time"
                name="End time"
                value={now(getLocalTimeZone()).add({ minutes: 30 })}
            />
        {/if}
    </div>
</div>
