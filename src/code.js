const { downloadTiktok } = require("@mrnima/tiktok-downloader");

module.exports.download = async (link) => {
    try {
        const { result } = await downloadTiktok(link);
        //console.log(result);
        return {
            images: result.dl_link.images || false,
            link: result.dl_link.download_mp4_1 || false,
            mp3: result.dl_link.download_mp3 || false,
            HD: result.dl_link.download_mp4_hd || false, 
            title: result.title.replace(/ /g, "-").replace(/”/g,"").replace(/"/g,"").slice(0,90)
        };
    } catch (error) {
        console.error("Error downloading TikTok video:", error);
    }
};
