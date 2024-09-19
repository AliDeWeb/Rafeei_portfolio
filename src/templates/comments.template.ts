export const commentTemplate = `
    <div
        class="grid w-[340px] grid-cols-6 justify-center rounded-xl p-4 font-dana text-black shadow-lg"
    >
        <div
            class="col-span-2 flex size-16 h-max justify-center overflow-hidden rounded-full"
        >
            <img
                class="object-cover"
                src="%%PROFILE%%"
                alt="user image"
            />
        </div>
        <div
            class="col-span-4 flex flex-col"
        >
            <span
                class="flex w-full items-center justify-between font-danaMedium"
            >
                <span>%%NAME%%</span>

                <span
                    class="font-dana text-xs text-gray-400"
                    >%%DATE%%</span
                >
            </span>
            <p
                class="mt-4 line-clamp-4 text-sm"
            >
                %%COMMENT%%
            </p>
        </div>
    </div>
`;
