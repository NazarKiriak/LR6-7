import React, { useContext, useState } from "react";
import { ProductInfoData } from "../ProductInfo/ProductInfo";
import styles from "../ProductInfo/ProductInfo.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProductsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("Введіть коментар!");
      return;
    }

    const newComment = `${comment}. ${new Date().toLocaleString()}`;
    console.log("Ваш відгук: ", newComment);
    alert(`Ваш відгук: "${newComment}" додано успішно!`);

    setComments([...comments, newComment]);
    setComment("");
  };

  const { id, name, description } = useContext(ProductInfoData);

  return (
    <div className={styles.product_info}>
      <div className={styles.wrapper_good}>
        <div className={styles.about_good}>
          <h2>
            Товар: {name} (ID: {id})
          </h2>
          <p>{description}</p>
        </div>
        <div className={styles.form_comments}>
          <form onSubmit={handleSubmitComment}>
            <div>
              <h3>Додати коментар:</h3>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Напишіть свій коментар"
              />
            </div>
            <button type="submit">Додати коментар</button>
          </form>
        </div>
        <div className={styles.comments}>
          <h3>Коментарі:</h3>
          <TransitionGroup className={styles.all_comments}>
            {comments.map((comment, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div className={styles.new_comment}>
                  <h4>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                      alt="User icon"
                    />
                    User
                  </h4>
                  <h5>
                    {index + 1}. {comment}
                  </h5>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
