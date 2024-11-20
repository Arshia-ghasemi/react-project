import News from "../../Data/News.json"

export default function NewsMainBody() {
    return <section className="px-8 cursor-pointer mb-[120px] grid place-items-center items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-52 gap-3">
        {
            News.map((elem,index) =>{
                return <div key={index} className="rounded-2xl shadow grid place-items-center items-center justify-center">
                    <img className="rounded-t-2xl mb-[-20px]" src={elem.img} alt=""/>
                    <span className="text-white  py-2 px-6 bg-green-600 rounded-lg inline-flex text-sm font-medium">{elem.date}</span>
                    <div className="flex gap-6 mt-[14px] mb-2">
                        <span className="flex items-center justify-center text-sm gray gap-1"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.045 0.454998C7.91649 0.454998 8.73297 0.619988 9.49447 0.949968C10.256 1.27995 10.9223 1.7305 11.4934 2.30162C12.0645 2.87274 12.515 3.53904 12.845 4.30053C13.175 5.06202 13.34 5.87851 13.34 6.75C13.34 7.62148 13.175 8.43797 12.845 9.19946C12.515 9.96096 12.0645 10.6273 11.4934 11.1984C10.9223 11.7695 10.256 12.22 9.49447 12.55C8.73297 12.88 7.91649 13.045 7.045 13.045C6.17351 13.045 5.35703 12.88 4.59553 12.55C3.83404 12.22 3.16774 11.7695 2.59662 11.1984C2.0255 10.6273 1.57495 9.96096 1.24497 9.19946C0.91499 8.43797 0.75 7.62148 0.75 6.75C0.75 5.87851 0.91499 5.06202 1.24497 4.30053C1.57495 3.53904 2.0255 2.87274 2.59662 2.30162C3.16774 1.7305 3.83404 1.27995 4.59553 0.949968C5.35703 0.619988 6.17351 0.454998 7.045 0.454998ZM7.045 2.89177C6.42735 2.89177 5.90065 3.10964 5.4649 3.54539C5.02916 3.98113 4.81129 4.50783 4.81129 5.12548C4.81129 5.74314 5.02916 6.26983 5.4649 6.70558C5.90065 7.14132 6.42735 7.35919 7.045 7.35919C7.66265 7.35919 8.18935 7.14132 8.6251 6.70558C9.06084 6.26983 9.27871 5.74314 9.27871 5.12548C9.27871 4.50783 9.06084 3.98113 8.6251 3.54539C8.18935 3.10964 7.66265 2.89177 7.045 2.89177ZM7.045 11.6235C7.41728 11.6235 7.77688 11.5812 8.12378 11.4966C8.47914 11.4205 8.81335 11.3063 9.12641 11.154C9.43947 11.0017 9.73561 10.8197 10.0148 10.6082C10.294 10.3967 10.5436 10.1598 10.7636 9.8975C10.5267 9.44906 10.1862 9.08312 9.74195 8.79968C9.29775 8.51624 8.80489 8.37451 8.26339 8.37451C8.22954 8.37451 8.19781 8.37663 8.1682 8.38086C8.13859 8.38509 8.11109 8.39144 8.08571 8.3999C7.91649 8.45066 7.74515 8.49297 7.5717 8.52681C7.39825 8.56066 7.22268 8.57758 7.045 8.57758C6.86732 8.57758 6.69175 8.56066 6.5183 8.52681C6.34485 8.49297 6.17351 8.45066 6.00429 8.3999C5.97891 8.39144 5.95141 8.38509 5.9218 8.38086C5.89219 8.37663 5.86046 8.37451 5.82661 8.37451C5.28511 8.37451 4.79225 8.51624 4.34805 8.79968C3.90385 9.08312 3.56329 9.44906 3.32638 9.8975C3.54637 10.1598 3.79597 10.3967 4.07518 10.6082C4.3544 10.8197 4.65053 11.0017 4.96359 11.154C5.27665 11.3063 5.61086 11.4205 5.96622 11.4966C6.31312 11.5812 6.67272 11.6235 7.045 11.6235Z" fill="#EEC044"/>
</svg>{elem.by}</span>
                        <span className="flex items-center justify-center text-sm gray gap-1"><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3694 4.62444C11.3694 5.18322 11.2297 5.71237 10.9503 6.21189C10.6794 6.70295 10.3048 7.13262 9.82641 7.50091C9.34805 7.8692 8.78715 8.15917 8.1437 8.37084C7.50026 8.5825 6.81447 8.68833 6.08636 8.68833C5.56991 8.68833 5.07251 8.63329 4.59415 8.52323C4.1158 8.41317 3.66919 8.25654 3.25434 8.05334C2.98341 8.21421 2.65745 8.36025 2.27647 8.49148C1.89548 8.62271 1.47215 8.68833 1.0065 8.68833C0.964168 8.68833 0.926069 8.67774 0.892203 8.65658C0.858337 8.63541 0.832938 8.60366 0.816005 8.56133C0.799072 8.52746 0.794839 8.48937 0.803305 8.44703C0.811772 8.4047 0.828705 8.37084 0.854104 8.34544C0.862571 8.34544 0.974751 8.20997 1.19064 7.93905C1.40654 7.66812 1.59915 7.34216 1.76848 6.96117C1.46369 6.63098 1.22663 6.26693 1.0573 5.869C0.88797 5.47108 0.803305 5.05623 0.803305 4.62444C0.803305 4.06565 0.943002 3.5365 1.22239 3.03698C1.49332 2.54593 1.86796 2.11626 2.34631 1.74797C2.82467 1.37968 3.38557 1.0897 4.02902 0.878039C4.67247 0.666379 5.35825 0.560549 6.08636 0.560549C6.81447 0.560549 7.50026 0.666379 8.1437 0.878039C8.78715 1.0897 9.34805 1.37968 9.82641 1.74797C10.3048 2.11626 10.6794 2.54593 10.9503 3.03698C11.2297 3.5365 11.3694 4.06565 11.3694 4.62444ZM14.4681 10.2123C14.6375 10.5933 14.8301 10.9192 15.046 11.1902C15.2619 11.4611 15.374 11.5965 15.3825 11.5965C15.4079 11.6304 15.4248 11.6664 15.4333 11.7045C15.4418 11.7426 15.4375 11.7786 15.4206 11.8124C15.4037 11.8548 15.3783 11.8865 15.3444 11.9077C15.3105 11.9289 15.2724 11.9394 15.2301 11.9394C14.7645 11.9394 14.3411 11.8738 13.9601 11.7426C13.5792 11.6114 13.2532 11.4653 12.9823 11.3045C12.5674 11.5076 12.1229 11.6643 11.6488 11.7743C11.1747 11.8844 10.6752 11.9394 10.1502 11.9394C9.59993 11.9394 9.07501 11.8802 8.57549 11.7616C8.07597 11.6346 7.61455 11.4611 7.19123 11.241C6.76791 11.0208 6.39539 10.7584 6.07366 10.4536C5.74347 10.1488 5.48101 9.81436 5.28628 9.45031C5.41328 9.46724 5.54451 9.47994 5.67997 9.4884C5.81543 9.49687 5.9509 9.5011 6.08636 9.5011C6.92454 9.5011 7.71615 9.37411 8.4612 9.12011C9.19778 8.86612 9.84122 8.51688 10.3915 8.07239C10.9419 7.62791 11.3779 7.10934 11.6996 6.51669C12.0213 5.92404 12.1822 5.29329 12.1822 4.62444C12.1822 4.53977 12.1801 4.45511 12.1758 4.37044C12.1716 4.28578 12.161 4.20112 12.1441 4.11645C12.6267 4.26885 13.0712 4.46781 13.4776 4.71334C13.8755 4.96733 14.2205 5.2573 14.5126 5.58326C14.8047 5.90922 15.0311 6.26693 15.192 6.65638C15.3529 7.04584 15.4333 7.45223 15.4333 7.87555C15.4333 8.30734 15.3486 8.72219 15.1793 9.12011C15.01 9.51804 14.7729 9.88209 14.4681 10.2123Z" fill="#EEC044"/>
</svg>{elem.comment}</span>
                    </div>
                    <h1 className="font-bold text-2xl text-center leading-normal mb-[42px] px-[46px]">{elem.title}</h1>
                </div>
            })
        }
    </section>
}