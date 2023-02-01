export default function handler(req, res) {
    // get the tokenId from query param
    const tokenId = req.query.tokenId;

    // read from github
    const image_url = "https://raw.githubusercontent.com/mr-m0nst3r/nftCollection-cd/main/public/cryptodevs/";

    res.status(200).json({
        name: "Crypto Dev #" + tokenId,
        description: "Crypto Dev is a collection of developers in crypto",
        image: image_url+tokenId+".svg",
    });
}