<template>
    <div class="footer-navbar">
        <div class="footer_left_section custom_col">
            <div class="footer_left_section_logo ">
                YOUR LOGO
            </div>
            <div class="footer_left_section_links">
                <ul>
                    <li>Sıkça Sorulan Sorular</li>
                    <li>Kişisel Verilen Korunması</li>
                    <li>Gizlilik Sözleşmesi</li>
                    <li>Çerez Ayarları</li>
                </ul>
            </div>
        </div>
        <div class="footer_right_section custom_col">
            <div class="footer_right_section_social_medias">
                <ul>
                    <li><img src="../../assets/facebook-icon.png" alt=""></li>
                    <li><img src="../../assets/x-icon.png" alt=""></li>
                    <li><img src="../../assets/linkedIn-icon.png" alt=""></li>
                    <li><img src="../../assets/instagram-icon.png" alt=""></li>
                </ul>
            </div>
            <div class="footer_right_section_text">
                2023 aydınlıkariyerim.com, Her hakkı saklıdır.
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 242px;
    max-width: 1200px;
    color: #fff;
    transition: scale 0.3s ease;
}

.footer_left_section {
    gap: 24px;
}

.footer_right_section {
    gap: 24px;
}

.footer_left_section_links {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

}

.footer_left_section_links ul {
    list-style: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    gap: 24px;
}

.footer_right_section_social_medias ul {
    list-style: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    gap: 24px;
    margin: 0;
}

.footer_right_section_text {
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    margin: 16px 0;
}

@media (max-width: 750px) {
    .footer-navbar {
        flex-direction: column;
        gap: 36px;
        height: 100%;
        padding: 24px 0;
    }

    .footer_left_section_links ul {
        list-style: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
}

@media (max-width: 992px) {
    .footer-navbar {
        scale: 0.8!important;
    }
}

@media (max-width: 1300px) {
    .footer-navbar {
        scale: 0.9;
    }
}
</style>