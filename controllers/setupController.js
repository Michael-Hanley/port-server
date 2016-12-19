var Images = require('../models/imageModel');

module.exports = function(app){

    app.get('/api/setupImages', function(req, res){
    var starterImages = [
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00001.jpg?alt=media&token=4639172f-172c-47d9-8b82-0533509b93d8',
            location: "Bryce Canyon, UT",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00002.jpg?alt=media&token=07538785-f3ec-49e8-a5eb-1a573456ffb0',
            location: "Bryce Canyon, UT",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00003.jpg?alt=media&token=0c11ca90-e5e9-4488-9243-235893490a43',
            location: "Bryce Canyon, UT",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00004.jpg?alt=media&token=99a0d1d9-79e1-45b4-b0c6-6bfa78bc485b',
            location: "Bryce Canyon, UT",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00005.jpg?alt=media&token=8534dbe3-a28b-4811-98f2-073f10fee094',
            location: "Bryce Canyon, UT",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00006.jpg?alt=media&token=2a44314a-4899-4f02-865c-b1983461ad9e',
            location: "Big Sur, CA",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00007.jpg?alt=media&token=a3cba72b-cc62-46ab-864b-f22f54f6121d',
            location: "Boulder, Co",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00008.jpg?alt=media&token=9ef92374-5cbb-4450-9744-501443a54873',
            location: "Yellowstone National Park",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00009.jpg?alt=media&token=d2148f6f-ed39-4635-b32a-28e20436a072',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00010.jpg?alt=media&token=dde7799b-a303-4bdd-9b37-cd064665bdfc',
            location: "Kalajoki, Finland",
            orientation: 'Landscape'
        },                
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00011.jpg?alt=media&token=8d1ba977-03b5-42cd-a5c9-6704522009eb',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00012.jpg?alt=media&token=4b7bc1cf-528d-45aa-a25d-955cee9244c4',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00013.jpg?alt=media&token=d7293641-d4e8-4855-9703-4751d619e0d3',
            location: "Yellowstone National Park",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00014.jpg?alt=media&token=58ec6891-a56d-4582-a163-a7fff4f752a6',
            location: "Wyoming",
            orientation: 'Landscape'
        },               
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00015.jpg?alt=media&token=48186cce-3d7e-4f28-aed7-84ff992fec10',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00016.jpg?alt=media&token=39969df6-bc0f-4e4b-9912-627aa82a0dc7',
            location: "Wyoming",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00017.jpg?alt=media&token=6bc2ac5c-64bd-4e22-b4dc-7afddde9855a',
            location: "Yellowstone National Park",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00018.jpg?alt=media&token=8c8abdc9-fe91-4a74-a550-a78873ef2231',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00019.jpg?alt=media&token=453552d7-b0e4-468c-8c74-d095cf328ce2',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00020.jpg?alt=media&token=6a91460a-e45f-4b4f-b04d-2af56e604449',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00021.jpg?alt=media&token=b9896be7-1c5d-4e56-8a09-a2969683116b',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00022.jpg?alt=media&token=592e7533-eac8-49d3-b638-c12702debb50',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00023.jpg?alt=media&token=33527f5d-3f77-4dda-8ea2-65cd07f1a917',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00024.jpg?alt=media&token=5ae70ff1-6034-4a38-a11d-2209024f1ecf',
            location: "Ylivieska, Finland",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00025.jpg?alt=media&token=aef36bdb-79f1-43a8-8423-148fbb1d4223',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00026.jpg?alt=media&token=82ff257e-d7c5-4185-9952-29f9b3227b16',
            location: "Yellowstone National Park",
            orientation: 'Portrait'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00027.jpg?alt=media&token=7731d4a0-4547-474f-9305-a54dd9c4aabd',
            location: "Ylivieska, Finland",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00028.jpg?alt=media&token=d50e68db-e852-4161-9dc1-4c5c6f48e6e5',
            location: "Zion Nation Park",
            orientation: 'Landscape'
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/website-port-mph.appspot.com/o/Landscape%2Flandscape00029.jpg?alt=media&token=52a4e79f-3be6-48eb-adaa-1febc3b00002',
            location: "Zion Nation Park",
            orientation: 'Landscape'
        }
    ];
    Images.create(starterImages, function(err, results) {
        res.send(results);
    })
})
}