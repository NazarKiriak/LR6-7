import React, { useState } from "react";
import styles from "./LoginButton.module.css";
import { Modal, Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function LoginButton({ onLogin }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button onClick={showModal} className={styles.loginButton}>
        Увійти
      </button>
      <Modal
        title="Авторизація"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Відмінити
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleOk}
          >
            Увійти
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            label="Логін"
            name="username"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть ім'я користувача!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: "Будь ласка, введіть пароль!",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
