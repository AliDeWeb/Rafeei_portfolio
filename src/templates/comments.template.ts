const commentTemplate = `
    <div
        class="select-none grid w-[300px] md:w-[340px] grid-cols-6 justify-center rounded-xl p-4 font-dana text-black shadow-lg mx-auto"
    >
        <div
            class="col-span-2 flex size-16 h-max justify-center overflow-hidden rounded-full"
        >
            <img
                loading="lazy"
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

export const useCommentsTemplate = (
    comment: string,
    date: string,
    name: string,
    profile: string,
) => {
    let template = ``;

    template = commentTemplate.replace(
        '%%COMMENT%%',
        comment,
    );
    template = template.replace('%%DATE%%', date);
    template = template.replace('%%NAME%%', name);
    template = template.replace('%%PROFILE%%', profile);

    return template;
};
