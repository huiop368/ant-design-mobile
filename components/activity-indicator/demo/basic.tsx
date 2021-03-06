import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WhiteSpace, WingBlank, Button, Flex, ActivityIndicator } from 'antd-mobile';

export default class ActivityIndicatorExample extends React.Component<any, any> {
  closeTimer: any;
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
    this.loadingToast = this.loadingToast.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  }

  loadingToast() {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 2000);
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon无文案</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon带文案</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="正在加载..." />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>深色背景</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>大号icon</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button type="ghost" onPress={this.loadingToast}>点击显示 Toast</Button>
        </WingBlank>
        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="正在加载"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});
