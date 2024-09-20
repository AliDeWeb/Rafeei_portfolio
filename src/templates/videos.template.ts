import { video } from '../db/videos.db';

const videoTemplate = `
    <div
        class="flex items-center justify-start"
    >
        <div class="mt-4 max-w-[650px]">
            <h3
                class="mb-4 font-danaBold text-lg text-black"
            >
                <span
                    class="inline-block size-2 bg-[#FFB100]"
                ></span>
                %%TITLE%%
            </h3>
            <div
                data-aos="zoom-in"
                class="overflow-hidden rounded-xl"
            >
                <video
                    id="video-%%INDEX%%"
                    playsinline
                    controls
                >
                    <source
                        src="%%SOURCE%%"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    </div>
`;

const useVideoTemplate = (
    source: string,
    title: string,
    index: number,
) => {
    let template = ``;

    template = videoTemplate.replace('%%SOURCE%%', source);
    template = template.replace('%%TITLE%%', title);
    template = template.replace('%%INDEX%%', `${index}`);

    return template;
};

export const insertVideo = (
    el: video,
    element: HTMLDivElement,
    index: number,
) => {
    element.insertAdjacentHTML(
        `beforeend`,
        `
             ${useVideoTemplate(el.source, el.title, index)}`,
    );
};
