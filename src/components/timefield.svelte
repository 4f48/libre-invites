<script lang="ts">
    import {
        getLocalTimeZone,
        now,
        type ZonedDateTime,
    } from "@internationalized/date";
    import { TimeField } from "bits-ui";

    type Props = TimeField.InputProps & {
        value?: ZonedDateTime;
    };
    const { name, value, ...props }: Props = $props();
</script>

<TimeField.Root
    locale={navigator.language}
    value={value || now(getLocalTimeZone())}
    hideTimeZone
>
    <TimeField.Label class="sr-only">{name}</TimeField.Label>
    <TimeField.Input
        class="border border-neutral-600 hover:bg-neutral-800 focus-visible:bg-neutral-800 py-1 px-2 rounded-md"
        {name}
        {...props}
    >
        {#snippet children({ segments })}
            {#each segments as { part, value }}
                <TimeField.Segment
                    class="focus-visible:outline-none focus-visible:bg-white focus-visible:text-neutral-900 rounded-sm"
                    {part}
                >
                    {value}
                </TimeField.Segment>
            {/each}
        {/snippet}
    </TimeField.Input>
</TimeField.Root>
