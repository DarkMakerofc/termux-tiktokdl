const { downloadTiktok } = require("@mrnima/tiktok-downloader");

module.exports.download = async (link) => {
    try {
        const { result } = await downloadTiktok(link);
        return {
            link: result.dl_link.download_mp4_1,
            title: result.title.replace(/ /g, "-")
        };
    } catch (error) {
        console.error("Error downloading TikTok video:", error);
    }
};