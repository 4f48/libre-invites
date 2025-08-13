<script lang="ts">
    import { getLocalTimeZone, today } from "@internationalized/date";
    import { DatePicker } from "bits-ui";
    import { tick } from "svelte";
    import Button from "./button.svelte";

    interface Props extends DatePicker.InputProps {}
    const { name }: Props = $props();

    let open = $state(false);
    let triggerEl: HTMLDivElement | null = null;
    let wasOpen = false;

    $effect(() => {
        if (wasOpen && !open && triggerEl) {
            tick().then(() => {
                const firstSegment =
                    triggerEl?.querySelector<HTMLElement>("[data-segment]");
                firstSegment?.focus();
            });
        }
        wasOpen = open;
    });
</script>

<DatePicker.Root bind:open value={today(getLocalTimeZone())}>
    <div class="flex items-center">
        <DatePicker.Label class="text-neutral-400 flex-1"
            >{name}</DatePicker.Label
        >
        <DatePicker.Trigger>
            {#snippet child({ props })}
                <div bind:this={triggerEl} {...props}>
                    <DatePicker.Input
                        class="border border-neutral-600 py-1 px-2 rounded-md"
                    >
                        {#snippet children({ segments })}
                            {#each segments as { part, value }, i (`segment-${i}`)}
                                <DatePicker.Segment
                                    class="focus-visible:outline-none focus-visible:bg-white focus-visible:text-neutral-900 rounded-sm"
                                    data-segment
                                    {part}>{value}</DatePicker.Segment
                                >
                            {/each}
                        {/snippet}
                    </DatePicker.Input>
                </div>
            {/snippet}
        </DatePicker.Trigger>
    </div>
    <DatePicker.Content sideOffset={6} class="z-50">
        <DatePicker.Calendar
            class="border rounded-lg bg-neutral-900 border-neutral-600 p-3 grid gap-3"
        >
            {#snippet children({ months, weekdays })}
                <DatePicker.Header class="flex items-center">
                    <DatePicker.Heading class="flex-1 font-bold" />
                    <DatePicker.PrevButton>
                        {#snippet child({ props })}
                            <Button
                                size="icon"
                                type="button"
                                variant="ghost"
                                {...props}
                            >
                                <div class="i-ph:caret-left"></div>
                            </Button>
                        {/snippet}
                    </DatePicker.PrevButton>
                    <DatePicker.NextButton>
                        {#snippet child({ props })}
                            <Button
                                size="icon"
                                type="button"
                                variant="ghost"
                                {...props}
                            >
                                <div class="i-ph:caret-right"></div>
                            </Button>
                        {/snippet}
                    </DatePicker.NextButton>
                </DatePicker.Header>
                {#each months as month, i (`month-${i}`)}
                    <DatePicker.Grid>
                        <DatePicker.GridHead>
                            <DatePicker.GridRow>
                                {#each weekdays as day, i (`day-${i}`)}
                                    <DatePicker.HeadCell
                                        class="size-8 text-center"
                                        >{day}</DatePicker.HeadCell
                                    >
                                {/each}
                            </DatePicker.GridRow>
                        </DatePicker.GridHead>
                        <DatePicker.GridBody>
                            {#each month.weeks as weekDates, i (`week-${i}`)}
                                <DatePicker.GridRow>
                                    {#each weekDates as date, i (`week-${i}-date-${i}`)}
                                        <DatePicker.Cell
                                            {date}
                                            month={month.value}
                                        >
                                            <DatePicker.Day
                                                class="size-8 font-medium data-[outside-month='']:invisible data-[today='']:bg-white data-[today='']:text-neutral-900 select-none unavailable:opacity-50 flex items-center focus-visible:bg-blue-500/75 focus-visible:outline-none justify-center rounded-full hover:bg-neutral-600/50"
                                            />
                                        </DatePicker.Cell>
                                    {/each}
                                </DatePicker.GridRow>
                            {/each}
                        </DatePicker.GridBody>
                    </DatePicker.Grid>
                {/each}
            {/snippet}
        </DatePicker.Calendar>
    </DatePicker.Content>
</DatePicker.Root>
