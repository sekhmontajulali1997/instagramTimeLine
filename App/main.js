const postForm = document.querySelector('.postForm');
const msg = document.querySelector('.msg');
const instaDynaminPost = document.querySelector('.instaDynaminPost');

// SHOW INSTA POSTTTTT

const instaPost = () =>{

    const allIntaPost = getdatals('insta_Posts');

    let dynamicPost= '';

    if (allIntaPost.length > 0) {
        
        allIntaPost.reverse().map((item, index) => {
            dynamicPost += `
            
            <div class="post-container">
<!------- Post Header ------>
<div class="post-header">
    <div class="author">
        <div class="author-profile-img">
            <img src="${item.Author_photo}" alt="">
        </div>
        <div class="post-author-name">
            <a href="#">${item.Autor_name}</a>
            <span><i class="fas fa-circle"></i> 1w</span>
            <a href="#"></a>
            <p>${ item.PostImage ?  ` <img src="${item.PostImage}" alt="">` : ''}</p>
        </div>
    </div>
    <div class="three-dot">
        <a href="#"><i class="fas fa-ellipsis-h"></i></a>
    </div>
</div>

<!------ Post Body ------>
<div class="post-body">
    <div class="post-img">
    ${ item.Post_photo ?  ` <img src="${item.Post_photo}" alt="">` : ''}
        
    </div>
    <div class="post-reaction">
        <div class="p-reaction-left">
            <div class="post-like post-icon">
                <span><i class="far fa-heart"></i></span>
            </div>
            <div class="post-comment post-icon">
                <span><i class="far fa-comment"></i></span>
            </div>
            <div class="post-share post-icon">
                <span><i class="far fa-paper-plane"></i></span>
            </div>
        </div>
        <div class="post-save post-icon">
            <span><i class="far fa-bookmark"></i></span>
        </div>
    </div>
    <div class="post-like-total">
        <p> 20,028,910 likes</p>
    </div>
    <div class="post-content">
        <p> <a href="#">${item.Autor_name}</a> ${item.Post_content ?  item.Post_content : ''}  <a href="#" class="post-tag"></a></p>
    </div>
    <div class="write-comment">
        <p>View all 176k comments</p>
        <form action="#">
            <input type="text" name="" id="" placeholder="Add a comment…">
        </form>
        <span><i class="far fa-smile"></i></span>
    </div>
</div>    

</div>

            
            `
        })
    
    

    } else{
        dynamicPost = '<h1>  No Post Found </h1>';
    }
    instaDynaminPost.innerHTML = dynamicPost;

}
instaPost();







// get post data

postForm.onsubmit = (e) => {
    e.preventDefault();
    const formDta = new FormData(e.target);
    const objectData = Object.fromEntries(formDta);

    // validations

    if (!objectData.AthourName.trim() || !objectData.AthourImage.trim()) {

        msg.innerHTML = inputRequered('First Two Fields Are Requeried', 'danger')
        
    }else{

        const lsdata = getdatals('insta_Posts');

        lsdata.push({

            Autor_name: objectData.AthourName,
            Author_photo: objectData.AthourImage,
            Post_content: objectData.post_content ?? null,
            Post_photo: objectData.PostImage ?? null,
            post_time: Date.now(),

        })
        setdataLS('insta_Posts', lsdata);
        instaPost();
        e.target.reset();

    }

    
};
