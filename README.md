<div align="center">

# Sentimentify

**_Music on demand based on your mood_**

</div>

<div align="center">

![](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)

</div>

## About The Project

![sentimentify screenshot](https://ucarecdn.com/55f8ad6e-6932-4ecb-831f-330bfc3fdbe9/)

Sentimentify is a music on demand service that uses your mood to recommend music, with computer vision and machine learning we can reconize your mood and search in our crowsourced database a playlist that match with you.

### How we use GitHub

We use tecnologies like Github Actions for Continous Integration and Continous Deployment that allow us simplify our workflow and make automatic deployments of our React App and our backend hosted in a kubernetes cluster super easy in every push. Additionally we use github pages for deliver our frontend worldwide in seconds, and obviously all the advantages that git brings to development.

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Getting Started

### Backend

Install the dependencies:

```sh
$ cd backend && pip3 install -r requirements.txt
```

Add environment variables:

```sh
cd backend
touch .env
echo "DETA_PROJECT_KEY=**YOUR_KEY**" >> ".env"
echo "DETA_PROJECT_KEY=**YOUR_ID**" >> ".env"
```

Run in dev mode:

```sh
$ cd backend && python3 main.py
```

### Frontend

Install the dependencies:

```sh
$ cd frontend && npm install
// or
$ cd frontend && yarn
```

Run in dev mode:

```sh
$ cd frontend && npm run dev
// or
$ cd frontend && yarn dev
```

### Built With

- JavaScript
- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [FastApi](https://fastapi.tiangolo.com)
- [Deta](https://deta.sh)
- [Linode](https://linode.com)
- [Kubernetes](https://kubernetes.io)

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Contributing

Contributions are what make the Open Source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a Pull Request. You can also simply [open an issue](https://github.com/pumasteam/sentimentify/issues) with the tag _enhancement_.

Don't forget to **give the project a star ⭐!** Thanks again!

1. Fork the project

2. Clone the repository

```bash
git clone https://github.com/@username/sentimentify
```

3. Create your Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

4. Push to the Branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

<p align="right"><a href="#top">Back to top 🔼</a></p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Contact 📭

**Juan Almanza @scidroid**
[@scidroid](https://scidroid.me/) - scidroid@scidroid.me
**Sebastian Ponce @sebaspv**
[@sebaspv](https://sebastianponce.co/) - sebastian@sebastianponce.co

<p align="right"><a href="#top">Back to top 🔼</a></p>
