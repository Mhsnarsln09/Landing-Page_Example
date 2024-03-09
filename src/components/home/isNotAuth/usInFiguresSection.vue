<template>
    <div class="usInFigure">
        <div class="usInFigure_area custom_row">
            <div class="custom_col usInFigure_content">
                <div class="usInFigure_content_a_section custom_col">
                    <div class="custom_row usInFigure_content_top_section">Rakamlarla Biz</div>
                    <div class="custom_row usInFigure_content_bottom_section">
                        Seni potansiyel bir çalışan olarak değil, geleceğimizin bir değeri olarak görüyoruz.
                        Yeteneklerini
                        keşfetmen ve gücünün farkına varman için daima yanında olmaya gayret ediyoruz. Düşüncelerine
                        değer
                        veriyor, geleceği birlikte şekillendiriyoruz.
                    </div>
                </div>
                <div class="custom_row usInFigure_content_b_section">
                    <div class="custom_col section_figure">
                        <div class="section_figure_title">3</div>
                        <div class="section_figure_text">Kıta</div>
                    </div>
                    <Divider layout="vertical" />
                    <div class="custom_col section_figure">
                        <div class="section_figure_title">66</div>
                        <div class="section_figure_text">Ülke</div>
                    </div>
                    <Divider layout="vertical" />
                    <div class="custom_col section_figure">
                        <div class="section_figure_title">690</div>
                        <div class="section_figure_text">Mağaza</div>
                    </div>
                    <Divider layout="vertical" />
                    <div class="custom_col section_figure">
                        <div class="section_figure_title">7500+</div>
                        <div class="section_figure_text">Çalışan</div>
                    </div>
                </div>
            </div>
            <div class="usInFigure_img custom_col">
                <img src="../../../assets/usInFigure.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.usInFigure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 650px;
    transition: scale 0.3s ease;
}

.usInFigure_area {
    justify-content: space-between;
}

.usInFigure_content {
    justify-content: space-evenly;
}

.usInFigure_content_a_section {
    gap: 24px;
}

.usInFigure_content_top_section {
    font-family: Montserrat;
    font-size: 39px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #1E2442;
}

.usInFigure_content_bottom_section {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #1E2442;
}

.usInFigure_content_b_section {
    background: #1ABC9C;
    width: 100%;
    height: 120px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-evenly;
    padding: 36px 0;
    
}

.section_figure{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: scale 0.3s ease;
}

.section_figure_title {
    font-family: Montserrat;
    font-size: 38px;
    font-weight: 900;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: center;
}

.section_figure_text {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
}

@media (max-width: 750px) {
    .usInFigure_img{
        display: none;
    }
    .usInFigure {
        scale: 0.7;
    }
    .usInFigure_content_b_section{
        margin-top: 30px ;
        height: 100px;
        padding: 24px;
    }
    .section_figure{
        scale: 0.8;
    }
}
@media (max-width: 1300px) {
    .usInFigure {
        scale: 0.9;
    }
}

@media (max-width: 992px) {
    .usInFigure {
        scale: 0.8;
    }
    .usInFigure_content_b_section{
        padding: 24px;
    }
}

</style>
