import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotificationCloseButton } from "./NotificationCloseButton";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, onRemoveNotification } from "./store";
import "./styles/_notifications.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(getNotifications);

  function remove(id) {
    setTimeout(() => {
      dispatch(onRemoveNotification(id));
    }, 2500);
  }

  return (
    <div className="notification">
      <ul className="notification_list">
        <AnimatePresence initial={false}>
          {notifications &&
            notifications.map((notification, idx) => {
              remove(idx);
              return (
                <motion.li
                  className="notification_list_item"
                  key={idx}
                  positionTransition
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    x: 50,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="notification_list_item_message">
                    {notification.message}
                  </span>
                  {/*<NotificationCloseButton close={() => remove(idx)} />*/}
                </motion.li>
              );
            })}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Notification;
